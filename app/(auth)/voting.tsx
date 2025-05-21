import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Voting() {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Hello people!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
})