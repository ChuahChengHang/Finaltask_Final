import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>DHANVIN</Text>
            <Text style={styles.textTitle}>VOTES</Text>
            <View style={styles.horizontalBoxContainer}>
              <View style={styles.box}>
                <Text style={styles.votesTitle}>Yes</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.votesTitle}>No</Text>
              </View>
            </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FF0000"
  },
  textTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  horizontalBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 160,
    height: 200,
    borderWidth: 1,
    borderColor: '#000',
  },
  votesTitle: {
    fontSize: 50, 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
})