import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../theme';

type Action = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  href: '/schedule' | '/grades' | '/homework' | '/announcements';
};

const ACTIONS: Action[] = [
  { label: 'Horaires', icon: 'calendar-outline', color: '#2563eb', href: '/schedule' },
  { label: 'Notes', icon: 'school-outline', color: '#16a34a', href: '/grades' },
  { label: 'Devoirs', icon: 'book-outline', color: '#d97706', href: '/homework' },
  { label: 'Annonces', icon: 'megaphone-outline', color: '#db2777', href: '/announcements' },
];

export function QuickActions() {
  const t = useTheme();
  const router = useRouter();

  return (
    <View style={styles.row}>
      {ACTIONS.map((a) => (
        <Pressable
          key={a.label}
          onPress={() => router.navigate(a.href)}
          accessibilityLabel={a.label}
          style={({ pressed }) => [styles.item, pressed && styles.pressed]}
        >
          <View style={[styles.circle, { backgroundColor: `${a.color}22` }]}>
            <Ionicons name={a.icon} size={26} color={a.color} />
          </View>
          <Text style={[styles.label, { color: t.text }]}>{a.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  item: { flex: 1, alignItems: 'center', gap: 6 },
  pressed: { opacity: 0.6 },
  circle: { width: 58, height: 58, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 12, fontWeight: '600' },
});