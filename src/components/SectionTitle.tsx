import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native';

import { useTheme } from '../theme';

type Props = { title: string; actionLabel?: string; onAction?: () => void };

export function SectionTitle({ title, actionLabel, onAction }: Props) {
  const t = useTheme();
  return (
    <View style={styles.row}>
      <Text style={[styles.title, { color: t.text }]}>{title}</Text>
      {actionLabel && onAction ? (
        <Pressable onPress={onAction} hitSlop={10}>
          <Text style={{ color: t.primary, fontWeight: '600' }}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  title: { fontSize: 18, fontWeight: '700' },
});
