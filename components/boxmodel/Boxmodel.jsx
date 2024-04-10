import { StyleSheet, View, Text } from "react-native";

const Boxmodel = () => {
  return (
    <>
      <View>
        <View style={style.parentView}>
          <Text style={[style.childText1, style.commanstyle]}>
            Box Model Rn
          </Text>
          <Text style={[style.childText2, style.commanstyle]}>
            Box Model Rn
          </Text>
          <Text style={[style.childText3, style.commanstyle]}>
            Box Model Rn
          </Text>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  parentView: {
    width: "100%",
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 5,
    borderColor: "#808080",
  },
  childText2: {
    backgroundColor: "#033E3E",
    borderColor: "#045F5F",
    color: "#FFFACD",
  },
  childText3: {
    backgroundColor: "#59E817",
    borderColor: "#00FF00",
    color: "#FFFACD",
  },

  childText1: {
    backgroundColor: "#227442",
    borderColor: "#4E9258",
    color: "#808000",
  },
  commanstyle: {
    // paddingBottom: 50,
    // paddingTop: 50,
    // alignItems: "center",
    paddingVertical:30,
    textAlign:"center",
    borderColor:"red",
    borderWidth:5,
    marginHorizontal:50,
    marginBottom:30
  },
});
export default Boxmodel;
