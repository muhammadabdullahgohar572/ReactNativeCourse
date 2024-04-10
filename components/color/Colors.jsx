import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Color = () => {
  const [newcolor, setnewColor] = useState([]);

  const ramdomcolor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainConatnier}>
          <TouchableOpacity
            onPress={() => {
              setnewColor([...newcolor, ramdomcolor()]);
              console.log(newcolor);
            }}
            style={style.buttonstyle}
          >
            <Text style={style.textstye}>Genrate Radam Color</Text>
          </TouchableOpacity>
          <FlatList
            keyExtractor={(key) => key}
            data={newcolor}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={style.mainConatnier}>
                    <Text
                      style={{
                        width: 180,
                        height: 150,
                        backgroundColor: item,
                        borderRadius: 10,
                        fontSize: 20,
                        color: "white",
                        alignContent: "center",
                        textAlign: "center",
                        justifyContent: "center",
                        padding: 5,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};
const style = StyleSheet.create({
  mainConatnier: {
    marginTop: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonstyle: {
    backgroundColor: "#5fb3ad",
    position: "relative",
    overflow: "hidden",
    paddingVertical: 20,
    paddingHorizontal: 30,
    color: "#ffb3ad",
    marginLeft: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: 5,
  },
  textstye: {
    color: "white",
    textTransform: "uppercase",
  },
  iamgeContanner: {
    marginVertical: 50,
    paddingHorizontal: 30,
    display: "flex",
  },
});
export default Color;
