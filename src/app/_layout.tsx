import { Stack } from 'expo-router';

import { HomeworkProvider } from '@/context/HomeworkContext';
import { useTheme } from '@/theme';

export default function RootLayout() {
    const t = useTheme();

    return (
        <HomeworkProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: t.card },
                    headerTintColor: t.text,
                    contentStyle: { backgroundColor: t.bg },
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="announcements/index" options={{ title: 'Annonces' }} />
                <Stack.Screen name="announcements/[id]" options={{ title: 'Annonce' }} />
                <Stack.Screen name="homework/[id]" options={{ title: 'Devoir' }} />
                <Stack.Screen name="grades/[subject]" options={{ title: 'Matière' }} />            
            </Stack>
        </HomeworkProvider>
    );
}