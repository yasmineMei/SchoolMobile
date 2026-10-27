import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../theme';

type Props = {
  firstName: string;
  initials: string;
  subtitle: string;
  dateLabel: string;
  unread: number;
  onBellPress: () => void;
};

export function HomeHeader({ firstName, initials, subtitle, dateLabel, unread, onBellPress }: Props) {
  const t = useTheme();

  return (
    <View style={styles.row}>
      <View style={[styles.avatar, { backgroundColor: t.primary }]}>
        <Text style={[styles.initials, { color: t.onPrimary }]}>{initials}</Text>
      </View>

      <View style={styles.flex}>
        <Text style={[styles.date, { color: t.muted }]}>{dateLabel}</Text>
        <Text style={[styles.hello, { color: t.text }]}>Bonjour {firstName} 👋</Text>
        <Text style={{ color: t.muted }}>{subtitle}</Text>
      </View>

      <Pressable
        onPress={onBellPress}
        accessibilityLabel="Voir les annonces"
        hitSlop={10}
        style={[styles.bell, { backgroundColor: t.card, borderColor: t.border }]}
      >
        <Ionicons name="notifications-outline" size={22} color={t.text} />
        {unread > 0 ? (
          <View style={[styles.badge, { backgroundColor: t.danger }]}>
            <Text style={styles.badgeText}>{unread}</Text>
          </View>
        ) : null}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1 },
  avatar: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  initials: { fontSize: 18, fontWeight: '700' },
  date: { fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  hello: { fontSize: 22, fontWeight: '800' },
  bell: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },
});