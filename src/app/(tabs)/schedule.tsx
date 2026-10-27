import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/Card';
import { LessonRow } from '@/components/LessonRow';
import { Screen } from '@/components/Screen';
import { lessons } from '@/data/mock';
import { useTheme } from '@/theme';
import { WEEKDAYS, type Weekday } from '@/types';
import { getTodayWeekday } from '@/utils/format';

export default function ScheduleScreen() {
  const t = useTheme();
  const [day, setDay] = useState<Weekday>(getTodayWeekday() ?? 'Lun');

  const dayLessons = lessons
    .filter((l) => l.day === day)
    .sort((a, b) => a.start.localeCompare(b.start));

  return (
    <Screen>
      <View style={styles.days}>
        {WEEKDAYS.map((d) => {
          const active = d === day;
          return (
            <Pressable
              key={d}
              onPress={() => setDay(d)}
              style={[
                styles.day,
                { borderColor: t.border, backgroundColor: active ? t.primary : t.card },
              ]}
            >
              <Text style={{ color: active ? t.onPrimary : t.text, fontWeight: '600' }}>{d}</Text>
            </Pressable>
          );
        })}
      </View>

      {dayLessons.length === 0 ? (
        <Card>
          <Text style={{ color: t.muted }}>Pas de cours ce jour-là.</Text>
        </Card>
      ) : (
        dayLessons.map((l) => <LessonRow key={l.id} lesson={l} />)
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  days: { flexDirection: 'row', gap: 8 },
  day: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
