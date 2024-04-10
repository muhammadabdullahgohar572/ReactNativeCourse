import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import no1 from "../img/1.jpg";

const Proops = (Proops) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.text}>{Proops.TextData}</Text>
          <Image source={Proops.Image} style={styles.imageStyle} />
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

export default Proops;
