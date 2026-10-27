import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getSubject } from '../../data/mock';
import { useTheme } from '../../theme';
import { formatDuration, relativeDayLabel, type NextLesson } from '../../utils/time';
import { Card } from '../Card';

const SOFT_WHITE = 'rgba(255,255,255,0.22)';
const TRACK_WHITE = 'rgba(255,255,255,0.3)';

type Props = { next: NextLesson | null; now: Date; onPress: () => void };

export function NextLessonCard({ next, now, onPress }: Props) {
  const t = useTheme();

  if (!next) {
    return (
      <Card style={styles.empty}>
        <Ionicons name="moon-outline" size={28} color={t.muted} />
        <Text style={{ color: t.muted }}>Aucun cours à venir.</Text>
      </Card>
    );
  }

  const subject = getSubject(next.lesson.subjectId);
  const ongoing = next.status === 'ongoing';

  let when: string;
  if (ongoing) when = `Se termine dans ${formatDuration(next.minutes)}`;
  else if (next.dayOffset === 0) when = `Commence dans ${formatDuration(next.minutes)}`;
  else when = `${relativeDayLabel(next.dayOffset, now)} à ${next.lesson.start}`;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.hero,
        { backgroundColor: subject?.color ?? t.primary },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.top}>
        <View style={[styles.pill, { backgroundColor: SOFT_WHITE }]}>
          <Text style={styles.pillText}>{ongoing ? '● En cours' : 'Prochain cours'}</Text>
        </View>
        <Text style={styles.time}>
          {next.lesson.start} - {next.lesson.end}
        </Text>
      </View>

      <Text style={styles.title}>{subject?.name ?? 'Cours'}</Text>
      <Text style={styles.meta}>
        {subject?.teacher} · Salle {next.lesson.room}
      </Text>

      <Text style={styles.when}>{when}</Text>

      {ongoing ? (
        <View style={[styles.track, { backgroundColor: TRACK_WHITE }]}>
          <View style={[styles.fill, { width: `${Math.round(next.progress * 100)}%` }]} />
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hero: { borderRadius: 20, padding: 18, gap: 4 },
  pressed: { opacity: 0.9 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  pill: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  pillText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  time: { color: '#fff', fontWeight: '600' },
  title: { color: '#fff', fontSize: 26, fontWeight: '800' },
  meta: { color: 'rgba(255,255,255,0.85)', fontSize: 14 },
  when: { color: '#fff', fontSize: 15, fontWeight: '700', marginTop: 10 },
  track: { height: 6, borderRadius: 3, marginTop: 10, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3, backgroundColor: '#fff' },
  empty: { alignItems: 'center', gap: 8, paddingVertical: 24 },
});