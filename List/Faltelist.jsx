import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

const List = () => {
  const namesArray = [
    { index: "1", name: "Fatima" },
    { index: "2", name: "Zayn" },
    { index: "3", name: "Aisha" },
    { index: "4", name: "Ali" },
    { index: "5", name: "Leila" },
    { index: "6", name: "Yusuf" },
    { index: "7", name: "Safiya" },
    { index: "8", name: "Ahmed" },
    { index: "9", name: "Soraya" },
    { index: "10", name: "Omar" },
    { index: "11", name: "Zara" },
    { index: "12", name: "Ibrahim" },
    { index: "13", name: "Huda" },
    { index: "14", name: "Khalid" },
    { index: "15", name: "Maryam" },
    { index: "16", name: "Nasir" },
    { index: "17", name: "Jasmine" },
    { index: "18", name: "Hamza" },
    { index: "19", name: "Sana" },
    { index: "20", name: "Amir" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(key) => {
          console.dir(key.index);
          return key.index;
        }}
        data={namesArray}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => {
          console.log(item.name);
          return (
            <Text style={styles.item}>
              {item.name}
              {item.index}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    marginTop: 20,
  },
  item: {
    backgroundColor: "red",
    color: "wight",
    padding: 10,
    fontSize: 18,
    height: 44,
    fontWeight: "500",
    margin: 20,
    width: 100,
    height: 100,
  },
});

export default List;
