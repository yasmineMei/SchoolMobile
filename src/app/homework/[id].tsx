import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeworkDetailsScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Devoir' }} />
			<Text style={styles.title}>Détails du devoir</Text>
			<Text style={styles.subtitle}>Identifiant : {id}</Text>

			<View style={styles.card}>
				<Text style={styles.label}>Matière</Text>
				<Text>À compléter</Text>
				<Text style={styles.label}>Date limite</Text>
				<Text>À compléter</Text>
				<Text style={styles.label}>Description</Text>
				<Text>Les informations du devoir apparaîtront ici.</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		marginBottom: 8,
		fontSize: 24,
		fontWeight: '700',
	},
	subtitle: {
		marginBottom: 20,
		color: '#666',
	},
	card: {
		gap: 8,
		padding: 16,
		borderRadius: 12,
		backgroundColor: '#f3f4f6',
	},
	label: {
		marginTop: 8,
		fontWeight: '600',
	},
});
