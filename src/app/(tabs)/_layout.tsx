import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ColorValue } from 'react-native';

import { useTheme } from '@/theme';

type IconName = keyof typeof Ionicons.glyphMap;

function tabIcon(name: IconName) {
  return ({ color, size }: { color: ColorValue; size: number }) => (
    <Ionicons name={name} size={size} color={color as string} />
  );
}

export default function TabsLayout() {
  const t = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: t.card },
        headerTintColor: t.text,
        tabBarActiveTintColor: t.primary,
        tabBarInactiveTintColor: t.muted,
        tabBarStyle: { backgroundColor: t.card, borderTopColor: t.border },
      }}
    >
      {/* L'accueil dessine son propre en-tête (salutation, avatar, notifications) */}
      <Tabs.Screen
        name="index"
        options={{ title: 'Accueil', headerShown: false, tabBarIcon: tabIcon('home-outline') }}
      />
      <Tabs.Screen name="schedule" options={{ title: 'Emploi du temps', tabBarLabel: 'Horaires', tabBarIcon: tabIcon('calendar-outline') }} />
      <Tabs.Screen name="grades" options={{ title: 'Notes', tabBarIcon: tabIcon('school-outline') }} />
      <Tabs.Screen name="homework" options={{ title: 'Devoirs', tabBarIcon: tabIcon('book-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil', tabBarIcon: tabIcon('person-outline') }} />
    </Tabs>
  );
}
