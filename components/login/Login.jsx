// Login.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions, // Import Dimensions for screen dimensions
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    if (username && email && isChecked) {
      // Perform login logic here
      navigation.navigate("Home");
      alert("Logged in successfully!");
    } else {
      alert("Please fill all fields and accept the terms.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.label}>I accept the terms and conditions</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isChecked ? "blue" : "grey" },
        ]}
        onPress={handleLogin}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.1, // Set horizontal padding to 10% of screen width
  },
  input: {
    width: "100%", // Make input fields span entire width
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkmark: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  button: {
    width: "100%", // Make button span entire width
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Login;
