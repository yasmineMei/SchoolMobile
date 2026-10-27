import { StyleSheet, Text, View } from 'react-native';

import { getSubject } from '../../data/mock';
import { useTheme } from '../../theme';
import type { Lesson } from '../../types';
import { lessonStatus } from '../../utils/time';
import { Card } from '../Card';

type Props = { lessons: Lesson[]; now: Date };

export function TodayTimeline({ lessons, now }: Props) {
  const t = useTheme();

  if (lessons.length === 0) {
    return (
      <Card>
        <Text style={{ color: t.muted }}>Pas de cours aujourd'hui. Profites-en pour te reposer ! 😌</Text>
      </Card>
    );
  }

  return (
    <View>
      {lessons.map((lesson, index) => {
        const subject = getSubject(lesson.subjectId);
        const status = lessonStatus(lesson, now);
        const color = subject?.color ?? t.primary;
        const isLast = index === lessons.length - 1;

        return (
          <View key={lesson.id} style={styles.row}>
            <View style={styles.timeCol}>
              <Text style={[styles.start, { color: t.text }]}>{lesson.start}</Text>
              <Text style={{ color: t.muted, fontSize: 12 }}>{lesson.end}</Text>
            </View>

            <View style={styles.markerCol}>
              <View
                style={[
                  styles.dot,
                  status === 'done'
                    ? { backgroundColor: t.border, borderColor: t.border }
                    : status === 'ongoing'
                      ? { backgroundColor: color, borderColor: color }
                      : { backgroundColor: t.bg, borderColor: color },
                ]}
              />
              {!isLast ? <View style={[styles.line, { backgroundColor: t.border }]} /> : null}
            </View>

            <View style={[styles.content, status === 'done' && styles.doneContent]}>
              <View style={styles.titleRow}>
                <Text style={[styles.name, { color: t.text }]}>{subject?.name ?? 'Cours'}</Text>
                {status === 'ongoing' ? (
                  <Text style={[styles.live, { color }]}>En cours</Text>
                ) : null}
              </View>
              <Text style={{ color: t.muted }}>
                Salle {lesson.room} · {subject?.teacher}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10, minHeight: 64 },
  timeCol: { width: 44, alignItems: 'flex-end', paddingTop: 1 },
  start: { fontWeight: '700' },
  markerCol: { width: 16, alignItems: 'center' },
  dot: { width: 14, height: 14, borderRadius: 7, borderWidth: 3, marginTop: 3 },
  line: { flex: 1, width: 2, marginVertical: 2 },
  content: { flex: 1, paddingBottom: 16, gap: 2 },
  doneContent: { opacity: 0.5 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  name: { fontSize: 16, fontWeight: '600' },
  live: { fontSize: 12, fontWeight: '700' },
});