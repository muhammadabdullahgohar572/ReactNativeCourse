import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import no1 from "./1.jpg";

const ImageFile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.text}>Hi</Text>
          <Image source={no1} style={styles.imageStyle} />
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>Hi</Text>
          <Image source={no1} style={styles.imageStyle} />
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>Hi</Text>
          <Image source={no1} style={styles.imageStyle} />
        </View>

        <View style={styles.list}>
          <Text style={styles.text}>Hi</Text>
          <Image source={no1} style={styles.imageStyle} />
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

export default ImageFile;
