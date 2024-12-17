import React from "react";
import { Text, View, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

	const participants = ['Thiago', 'Rodrigo', 'Tuntum', 'Isadora', 'Victoria', 'Dina', 'Rui', 'Thales', 'Robert', 'Dirk'];

	function handleAddParticipant() {
		if(participants.includes('Thiago')) {
			return Alert.alert("Particapante existe", "Ja existe um participante na lista com esse nome" );
      
		}
	}

	function handleRemoveParticipant(name: string) {
		Alert.alert('Remover', `Remover o participante ${name}?`, [
			{ text: 'Sim', 
				onPress: () => Alert.alert('Deletado!')
			},
      { text: 'Não',
				style: 'cancel'
			},
		]);
	}
	return (
			<View style={styles.container}>
				<Text style={styles.eventName}>Nome do evento
				</Text>
				<Text style={styles.eventDate}>Segunda, 16 de Dezembro de 2024</Text>

				<View style={styles.form}>
					<TextInput
						style={styles.input}
						placeholder="Nome do participante"
						placeholderTextColor='#6b6b6b'
					/>
					<TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
						<Text style={styles.buttonText}>
							+
						</Text>
					</TouchableOpacity>
				</View>

				<FlatList 
					data={participants}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleRemoveParticipant(item)} />
					)}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => <Text style={styles.emptyList}>Ninguem chegou no evento ainda.</Text>}
				/>
			</View>
	)
}