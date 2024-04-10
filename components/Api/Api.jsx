import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import no1 from "../../img/images.jpeg";

const Api = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setIsLoaded(false);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {isLoaded ? (
          <View>
            <ActivityIndicator
              style={styles.main}
              size="large"
              color="#0000ff"
              animating={isLoaded}
            />
          </View>
        ) : (
          <>
            <FlatList
              data={Data}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={no1}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.label}>Name:</Text>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.label}>Email:</Text>
                      <Text style={styles.text}>{item.email}</Text>
                      <Text style={styles.label}>Username:</Text>
                      <Text style={styles.text}>{item.username}</Text>
                      <Text style={styles.label}>Street:</Text>
                      <Text style={styles.text}>{item.address.street}</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
              onPress={navigateToLogin}
              style={styles.loginButton}
            >
              <Text style={styles.buttonText}>Go back to Login</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffc0cb",
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    padding: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    marginTop: "500%",
  },
  loginButton: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
  },
});

export default Api;
