import React from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento
        </Text>
        <Text style={styles.eventDate}>Segunda, 16 de Dezembro de 2024</Text>
      </View>
    </>
  )
}