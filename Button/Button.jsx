import { Alert, Button, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import no1 from "../img/1.jpg";
const Buttons = () => {
  return (
    <>
      <Text style={{ fontSize: 50, fontWeight: "600", marginVertical: "100" }}>
        Buttons
      </Text>
      <Button
        title="Join Now"
        onPress={() =>
           console.log("Hi Abdullah")
        //   Alert.alert("hi")
        }
        // disabled
      />

      <TouchableOpacity style={{marginTop:50,color:"wight"}} onPress={() => console.log("HI ABDULLAH HOW ARE YOU")}>
          <Image source={no1} style={{width:50,height:50}}/>
        <Text style={{color:"white",padding:10,fontSize:20,fontWeight:"400",backgroundColor:"red"}}>On click Me</Text>
      
      </TouchableOpacity>
    </>
  );
};

export default Buttons;
