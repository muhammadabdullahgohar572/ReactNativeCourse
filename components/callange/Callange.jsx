import { StyleSheet, View, Text } from "react-native";

const Callange = () => {
  return (
    <>
      <View>
        <View style={style.parentView}>
          <Text style={[style.childText1,style.commanstyle]}>Box Model Rn</Text>
          <Text style={[style.childText2,style.commanstyle]}>Box Model Rn</Text>
          <Text style={[style.childText3,style.commanstyle]}>Box Model Rn</Text>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  parentView: {
    width: "95%",
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 5,
    borderColor: "#808080",
  },
  childText2: {
    backgroundColor: "#033E3E",
    borderColor: "#045F5F",
    color: "#FFFACD",
    // marginTop: 30,
    // fontSize: 20,
    // paddingVertical: 30,
    // alignItems: "center",
    // borderWidth: 5,
    // marginBottom: 30,
    // marginVertical: 50,
  },
  childText3: {
    backgroundColor: "#59E817",
    borderColor: "#00FF00",
    color: "#FFFACD",
    // marginTop: 30,
    // fontSize: 20,
    // paddingVertical: 30,
    // alignItems: "center",
    // borderWidth: 5,
    // marginBottom: 30,
    // marginVertical: 50,
  },

  childText1: {
    backgroundColor: "#227442",
    borderColor: "#4E9258",
    color: "#808000",
  },
  commanstyle: {
    marginTop: 30,
    fontSize: 20,
    paddingVertical: 30,
    alignItems: "center",
    borderWidth: 5,
    marginBottom: 30,
    marginVertical: 50,
  },
});
export default Callange;
