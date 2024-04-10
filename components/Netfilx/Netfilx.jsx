import { Linking, Text, TouchableOpacity } from "react-native";

const Netfilx = () => {
  return (
    <>
      <TouchableOpacity
        style={{ marginTop: 50 }}
        onPress={() =>
          Linking.openURL(
            "https://www.youtube.com/watch?v=mRD0-GxqHVo&list=RDMMehj9tXyJSJg&index=3"
          )
        }
      >
        <Text
          style={{
            color: "white",
            padding: 10,
            fontSize: 20,
            fontWeight: "400",
            backgroundColor: "red",
            fontFamily: "Roboto-Regular",
          }}
        >
          On click Me
        </Text>
      </TouchableOpacity>

      <Text style={{ margin: 40 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        assumenda dignissimos minima reiciendis dolores magni, quo deleniti
        distinctio corporis earum impedit voluptas officia, vel voluptate
        ratione molestiae saepe perspiciatis a?
      </Text>
    </>
  );
};

export default Netfilx;
