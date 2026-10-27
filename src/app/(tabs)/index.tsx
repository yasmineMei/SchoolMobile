import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnnouncementsCarousel } from '@/components/home/AnnouncementsCarousel';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeworkPreview } from '@/components/home/HomeworkPreview';
import { NextLessonCard } from '@/components/home/NextLessonCard';
import { QuickActions } from '@/components/home/QuickActions';
import { StatsRow } from '@/components/home/StatsRow';
import { TodayTimeline } from '@/components/home/TodayTimeline';
import { SectionTitle } from '@/components/SectionTitle';
import { useHomework } from '@/context/HomeworkContext';
import { announcements, grades, homework, lessons, student, subjects } from '@/data/mock';
import { useNow } from '@/hooks/use-now';
import { useTheme } from '@/theme';
import { overallAverage } from '@/utils/grades';
import {
  capitalize,
  daysUntil,
  formatLongDate,
  getNextLesson,
  lessonsOfDay,
  weekdayOf,
} from '@/utils/time';

console.log({
  AnnouncementsCarousel,
  HomeHeader,
  HomeworkPreview,
  NextLessonCard,
  QuickActions,
  StatsRow,
  TodayTimeline,
  SectionTitle,
});

export default function HomeScreen() {
    const t = useTheme();
    const router = useRouter();
    const now = useNow();
    const { isDone } = useHomework();
    const insets = useSafeAreaInsets();

    const todayLessons = lessonsOfDay(lessons, weekdayOf(now));
    const next = getNextLesson(todayLessons, now);

    const pending = homework
        .filter((h) => !isDone(h.id))
        .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

    const recentAnnouncements = announcements.filter((a) => daysUntil(a.date, now) <= 7);
 return (
    <ScrollView
      style={{ backgroundColor: t.bg }}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 12 }]}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader
        firstName={student.firstName}
        initials={`${student.firstName[0]}${student.lastName[0]}`}
        subtitle={`${student.className} · ${student.school}`}
        dateLabel={capitalize(formatLongDate(now))}
        unread={recentAnnouncements.length}
        onBellPress={() => router.push('/announcements')}
      />

      <NextLessonCard next={next} now={now} onPress={() => router.navigate('/schedule')} />

      <StatsRow
        average={overallAverage(grades, subjects)}
        pendingHomework={pending.length}
        lessonsToday={todayLessons.length}
      />

      <QuickActions />

      <View style={styles.section}>
        <SectionTitle
          title="Ma journée"
          actionLabel="Emploi du temps"
          onAction={() => router.navigate('/schedule')}
        />
        <TodayTimeline lessons={todayLessons} now={now} />
      </View>

      <View style={styles.section}>
        <SectionTitle
          title="Devoirs à rendre"
          actionLabel="Tout voir"
          onAction={() => router.navigate('/homework')}
        />
        <HomeworkPreview items={pending.slice(0, 3)} now={now} />
      </View>

      <View style={styles.section}>
        <SectionTitle
          title="Annonces"
          actionLabel="Tout voir"
          onAction={() => router.push('/announcements')}
        />
        <AnnouncementsCarousel items={announcements.slice(0, 4)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 16, paddingBottom: 32, gap: 18 },
  section: { gap: 10 },
});
