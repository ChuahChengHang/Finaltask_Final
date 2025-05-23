import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, Platform, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import firestore from "@react-native-firebase/firestore";

export default function Index() {
  const db = firestore();
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const getDataForYes = async () => {
    const snapshot = await db.collection("Yes").get();
    const data = snapshot.docs.map(doc => doc.data())
    setYesVotes(data.length);
  }
  const getDataForNo = async () => {
    const snapshot = await db.collection("No").get();
    const data = snapshot.docs.map(doc => doc.data())
    setNoVotes(data.length);
  }
  useEffect(() => {
    getDataForYes();
    getDataForNo();
  });
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>HOT CHOCOLATE</Text>
            <Text style={styles.textTitle}>VOTES</Text>
            <View style={styles.horizontalBoxContainer}>
              <View style={styles.box}>
                <Text style={styles.votesTitleForYes}>Yes</Text>
                <Text style={styles.votesTextStyle}>{yesVotes}</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.votesTitleForNo}>No</Text>
                <Text style={styles.votesTextStyle}>{noVotes}</Text>
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
  votesTitleForYes: {
    fontSize: 50, 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: "#56AE57"
  },
  votesTitleForNo: {
    fontSize: 50, 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: "#FF0000"
  },
  votesTextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 30,
  }
})