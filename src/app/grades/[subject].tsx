import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SubjectGradesScreen() {
	const { subject } = useLocalSearchParams<{ subject: string }>();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Notes</Text>
			<Text style={styles.subject}>{subject}</Text>

			{/* TODO: Ajouter ici la liste des notes de la matière. */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
	},
	subject: {
		marginTop: 8,
		fontSize: 18,
	},
});
