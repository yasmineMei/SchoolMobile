import { Ionicons} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/Card';
import { Screen } from '@/components/Screen';
import { SectionTitle } from '@/components/SectionTitle';
import { grades, subjects } from '@/data/mock';
import { useTheme } from '@/theme';
import { formatAverage, overallAverage, subjectAverage } from '@/utils/grades';

export default function GradesScreen() {
    const t = useTheme();
    const router = useRouter();
    const overall = overallAverage(grades, subjects);

    return (
        <Screen>
            <Card style={styles.overall}>
                <Text style={{ color: t.muted }}>Moyenne générale</Text>
                <Text style={[styles.overallValue, { color: t.primary }]}>
                {formatAverage(overall)}
                <Text style={[styles.outOf, { color: t.muted }]}> / 20</Text>
                </Text>
            </Card>

            <SectionTitle title="Par matière" />
      {subjects.map((s) => {
        const avg = subjectAverage(grades, s.id);
        return (
          <Card
            key={s.id}
            onPress={() => router.push({ pathname: '/grades/[subject]', params: { subject: s.id } })}
            style={styles.row}
          >
            <View style={[styles.dot, { backgroundColor: s.color }]} />
            <View style={styles.flex}>
              <Text style={[styles.name, { color: t.text }]}>{s.name}</Text>
              <Text style={{ color: t.muted }}>Coef. {s.coefficient}</Text>
            </View>
            <Text style={[styles.avg, { color: t.text }]}>{formatAverage(avg)}</Text>
            <Ionicons name="chevron-forward" size={18} color={t.muted} />
          </Card>
        );
      })}
        </Screen>
    )
}

const styles = StyleSheet.create({
  overall: { alignItems: 'center', gap: 4 },
  overallValue: { fontSize: 42, fontWeight: '800' },
  outOf: { fontSize: 18, fontWeight: '500' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  flex: { flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  avg: { fontSize: 18, fontWeight: '700' },
});
