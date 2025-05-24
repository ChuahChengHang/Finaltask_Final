import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TextInput, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import firestore from "@react-native-firebase/firestore";
import { FirestoreError } from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Voting() {
    const [disabled, setDisabled] = useState(false);
    const db = firestore();
    const [currentTime, setCurrentTime] = useState("");
    // const clearAsyncStorage = async () => {
    //     try {
    //     await AsyncStorage.clear();
    //     }catch(error) {
    //     console.log("Error clearing async storage: ", error);
    //     }
    // }
    const targetTime = "00:00:00 AM"    
    const addYesVote = async () => {
        try {
            await db.collection("Yes").add({
                vote: 1,
            });
            setDisabled(true);
            alert("Vote added successfully! You can vote again after 24 hours")
    }catch (e: any) {
        const error = e as FirestoreError
        alert("Error adding vote: " + error.message + "\nPlease try again!");
    }
}
const addNoVote = async () => {
    try {
        await db.collection("No").add({
            vote: 1,
        });
        setDisabled(true);
        alert("Vote added successfully! You can vote again after 24 hours")
    }catch (e: any) {
        const error = e as FirestoreError
        alert("Error adding vote: " + error.message + "\nPlease try again!");
    }
}
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setCurrentTime(now);

      if (now === targetTime) {
        setDisabled(false);      
    }
    }, 1000); 

    return () => clearInterval(interval); 
  }, [])
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Vote for adding hot chocolate or not here!</Text>
            <View style={styles.buttonStyle}>
                    <Pressable onPress={() => addYesVote()}
                    style={({ pressed }) => ({
                        backgroundColor: pressed ? '#008000' : '#00ff00',
                        padding: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        width: '80%',
                        marginBottom: 20,
                    })} disabled={disabled}>
                        <Image source={require("../../assets/images/hotChocolate.png")} style={styles.imageStyle}/>
                        <Text>Add Hot Chocolate Machine!</Text>
                    </Pressable>
            </View>
            <View style={styles.buttonStyle}>
        <Pressable
            onPress={() => addNoVote()}
            style={({ pressed }) => ({
                backgroundColor: pressed ? '#FF7F7F' : '#FF0000',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                width: '59%',
                marginBottom: 20,
            })} disabled={disabled}
        >
                <Image source={require("../../assets/images/noHotChocolate.png")} style={styles.imageStyle}/>
                <Text>Don't Add Hot Chocolate Machines</Text>
        </Pressable>
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
    textStyle: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
    buttonStyle: {
        width: "auto",
        height: "auto",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})