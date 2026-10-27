import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../theme';
import { formatAverage } from '../../utils/grades';
import { Card } from '../Card';

type Props = { average: number | null; pendingHomework: number; lessonsToday: number };

type Stat = {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  label: string;
  color: string;
};

export function StatsRow({ average, pendingHomework, lessonsToday }: Props) {
  const t = useTheme();

  const stats: Stat[] = [
    { icon: 'stats-chart-outline', value: formatAverage(average), label: 'Moyenne /20', color: t.primary },
    { icon: 'book-outline', value: String(pendingHomework), label: 'Devoirs à faire', color: t.warning },
    { icon: 'time-outline', value: String(lessonsToday), label: "Cours aujourd'hui", color: '#2563eb' },
  ];

  return (
    <View style={styles.row}>
      {stats.map((s) => (
        <Card key={s.label} style={styles.card}>
          <Ionicons name={s.icon} size={20} color={s.color} />
          <Text style={[styles.value, { color: t.text }]}>{s.value}</Text>
          <Text style={[styles.label, { color: t.muted }]}>{s.label}</Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10 },
  card: { flex: 1, padding: 12, gap: 2 },
  value: { fontSize: 22, fontWeight: '800', marginTop: 4 },
  label: { fontSize: 12 },
});