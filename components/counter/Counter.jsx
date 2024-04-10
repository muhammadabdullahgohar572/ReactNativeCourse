import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Count = () => {
  const [count, setcount] = useState(0);

  const inc = () => {
    setcount(count + 1);
  };

  const dec = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  const rest = () => {
    setcount(0);
  };
  return (
    <>
      <View style={style.main}>
        <View>
          <Text style={{ fontSize: 50, fontWeight: "600" }}>{count}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={style.ten} onPress={inc}>
            <Text
              style={{
                color: "white",
                padding: 20,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              +1
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={style.ten} onPress={rest}>
            <Text
              style={{
                color: "white",
                padding: 20,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={style.ten} onPress={dec}>
            <Text
              style={{
                color: "white",
                padding: 20,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              -1
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  main: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  ten: {
    backgroundColor: "black",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Count;
