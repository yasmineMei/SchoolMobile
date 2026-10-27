import { StyleSheet, Text, View } from 'react-native';

import { getSubject } from '../data/mock';
import { useTheme } from '../theme';
import type { Lesson } from '../types';
import { Card } from './Card';

export function LessonRow({ lesson }: { lesson: Lesson }) {
  const t = useTheme();
  const subject = getSubject(lesson.subjectId);

  return (
    <Card style={styles.card}>
      <View style={[styles.bar, { backgroundColor: subject?.color ?? t.primary }]} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: t.text }]}>{subject?.name ?? 'Cours'}</Text>
        <Text style={{ color: t.muted }}>
          {lesson.start} - {lesson.end} · Salle {lesson.room}
        </Text>
        {subject ? <Text style={{ color: t.muted }}>{subject.teacher}</Text> : null}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, alignItems: 'stretch' },
  bar: { width: 5, borderRadius: 3 },
  info: { flex: 1, gap: 2 },
  name: { fontSize: 16, fontWeight: '600' },
});
