import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../theme';
import type { Announcement } from '../../types';
import { formatDate } from '../../utils/format';
import { Card } from '@/components/Card';

const LABELS = { info: 'Info', event: 'Événement', urgent: 'Urgent' } as const;

export function AnnouncementsCarousel({ items }: { items: Announcement[] }) {
  const t = useTheme();
  const router = useRouter();

  const colorOf = (category: Announcement['category']) =>
    category === 'urgent' ? t.danger : category === 'event' ? t.warning : t.primary;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.content}
    >
      {items.map((a) => {
        const color = colorOf(a.category);
        return (
          <Card
            key={a.id}
            onPress={() => router.push({ pathname: '/announcements/[id]', params: { id: a.id } })}
            style={styles.card}
          >
            <View style={styles.top}>
              <View style={[styles.badge, { backgroundColor: `${color}22` }]}>
                <Text style={[styles.badgeText, { color }]}>{LABELS[a.category]}</Text>
              </View>
              <Text style={{ color: t.muted, fontSize: 12 }}>{formatDate(a.date)}</Text>
            </View>
            <Text numberOfLines={2} style={[styles.title, { color: t.text }]}>
              {a.title}
            </Text>
            <Text numberOfLines={3} style={{ color: t.muted }}>
              {a.content}
            </Text>
          </Card>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Marge négative : le carrousel va jusqu'aux bords de l'écran malgré le padding de la page.
  scroll: { marginHorizontal: -16 },
  content: { paddingHorizontal: 16, gap: 12 },
  card: { width: 270, gap: 8 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  title: { fontSize: 16, fontWeight: '700' },
});
