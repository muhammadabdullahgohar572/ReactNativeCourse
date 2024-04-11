import { StyleSheet, Text, View } from "react-native";

const Responcee = () => {
  const screen = window.innerWidth;

  const box = {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      screen === 320
        ? "red"
        : screen === 375
        ? "yellow"
        : screen === 425
        ? "blue"
        : screen === 768
        ? "black"
        : null,
  };
  return (
    <View style={styles.container}>
      <View style={box}>
        <Text>"hi"</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Responcee;
