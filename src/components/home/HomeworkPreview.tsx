import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { getSubject } from '../../data/mock';
import { useTheme } from '../../theme';
import type { Homework } from '../../types';
import { daysUntil, dueLabel } from '../../utils/time';
import { Card } from '../Card';

type Props = { items: Homework[]; now: Date };

export function HomeworkPreview({ items, now }: Props) {
  const t = useTheme();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <Card style={styles.empty}>
        <Text style={{ fontSize: 28 }}>🎉</Text>
        <Text style={{ color: t.muted }}>Tous tes devoirs sont faits, bravo !</Text>
      </Card>
    );
  }

  return (
    <View style={styles.list}>
      {items.map((h) => {
        const subject = getSubject(h.subjectId);
        const days = daysUntil(h.dueDate, now);
        const tone = days <= 0 ? t.danger : days === 1 ? t.warning : t.muted;
        const color = subject?.color ?? t.primary;

        return (
          <Card
            key={h.id}
            onPress={() => router.push({ pathname: '/homework/[id]', params: { id: h.id } })}
            style={styles.row}
          >
            <View style={[styles.icon, { backgroundColor: `${color}22` }]}>
              <Ionicons name="document-text-outline" size={22} color={color} />
            </View>
            <View style={styles.flex}>
              <Text numberOfLines={1} style={[styles.title, { color: t.text }]}>
                {h.title}
              </Text>
              <Text style={{ color: t.muted }}>{subject?.name}</Text>
            </View>
            <View style={[styles.chip, { backgroundColor: `${tone}22` }]}>
              <Text style={[styles.chipText, { color: tone }]}>{dueLabel(days)}</Text>
            </View>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1 },
  icon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  chip: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  chipText: { fontSize: 12, fontWeight: '700' },
  empty: { alignItems: 'center', gap: 6, paddingVertical: 20 },
});