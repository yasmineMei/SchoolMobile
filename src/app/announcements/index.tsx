import { StyleSheet, Text, View } from 'react-native';

export default function AnnouncementsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Annonces</Text>
			{/* TODO: afficher la liste des annonces */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
