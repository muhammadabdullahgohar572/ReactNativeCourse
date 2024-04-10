import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import no1 from "../img/1.jpg";
import Proops from "../Props/Proops";
import no2 from "../img/12.jpg";
const ProopsData = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.text}>This  is 1 a Image</Text>
          <Image source={no1} style={styles.imageStyle} />
        </View>

        <View style={styles.list}>
          <Proops TextData={"This  is 2 a Image "} Image={no2} />
        </View>

        <View style={styles.list}>
          <Proops TextData={"This  is 3 a Image "} Image={no1} />
        </View>

        <View style={styles.list}>
          <Proops TextData={"This  is 4 a Image "} Image={no2} />
        </View>

        <View style={styles.list}>
          <Proops TextData={"This  is 5 a Image "} Image={no1} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "scroll",
  },
  list: {
    marginVertical: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});

export default ProopsData;
