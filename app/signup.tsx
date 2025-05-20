import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const storeData = async () => {
        try {
          await AsyncStorage.setItem('isLoggedIn', 'true');
        } catch (error) {
          console.error('Error saving data', error);
        }
    };

  const signUp = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      setLoading(false);
    }else if (email !== "" && password !== "") {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        alert("Please Check your email for verfication")
        storeData();
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigation.goBack();
      }catch(e: any) {
        const err = e as FirebaseError
        alert("Login failed: " + err.message)
        console.log(err.code)
      }finally {
        setLoading(false);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInputStyle}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.textInputStyle}
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.textInputStyle}
        secureTextEntry
        autoCapitalize="none"
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ADD8E6' : '#24A0ED',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            width: '80%',
            marginBottom: 20,
          },
        ]}
        onPress={() => signUp()}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
  }
})