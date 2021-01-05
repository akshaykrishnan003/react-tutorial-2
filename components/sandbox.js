import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return <View style={styles.container}>
    <Text style={styles.boxOne}>one</Text>
    <Text style={styles.boxtwo}>two</Text>
    <Text style={styles.boxthree}>three</Text>
    <Text style={styles.boxfour}>four</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne:{
    flex: 1,
    backgroundColor:'violet',
    padding: 10,
  },
  boxtwo:{
    flex: 2,
    backgroundColor:'gold',
    padding: 10,
  },
  boxthree:{
    flex: 1,
    backgroundColor:'coral',
    padding: 10,
  },
  boxfour:{
    flex: 3,
    backgroundColor:'skyblue',
    padding: 10,
  },
});
