import { TextInput, Text, Button } from "react-native-paper"
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeTitle} variant="titleLarge">welcome to leaf analyzer </Text>
        <Text style={styles.signupTitle} variant="titleLarge">Signup</Text>
      </View>
      <KeyboardAvoidingView style={styles.signupForm}>

        <TextInput
          style={styles.Input}
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.Input}
          label="Email"
          mode="outlined"
          secureTextEntry={true}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.Input}
          label="Phone Number"
          mode="outlined"
          value={phonenumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.Input}
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.Input}
          label="Confirm Password"
          mode="outlined"
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Button style={styles.signupBTN} mode="contained" onPress={() => login()}>
          Signup
        </Button>

      </KeyboardAvoidingView >
      <View style={styles.socialSignup}>
        <FontAwesome.Button name="google" backgroundColor="#F56565" onPress={() => console.log("login using google")}>
          Signup with Google
        </FontAwesome.Button>
        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={() => console.log("login using facebook")}>
          Signup with Facebook
        </FontAwesome.Button>
      </View>

      <View style={styles.alreadyUser}><Text onPress={() => { console.log(navigation.navigate("Signin")) }} style={styles.alreadyUserText}>Already have an account</Text></View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0FFF4",
    height: "100%",
    width: "100%"
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25
  },
  welcomeTitle: {
    marginTop: 15
  },
  signupTitle: {
    marginTop: 36
  },
  signupForm: {
    marginTop: 24,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    minheight: 200,
  },
  signupBTN: {
    backgroundColor: "#38A169",
    color: "#fff",
    marginTop: 24
  },

  Input: {
    marginTop: 20,
  },
  socialSignup: {
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  alreadyUser: {
    marginTop: 10,
    height: 50,
    display: "flex",
    flexDirection: "row-reverse",
    // justifyContent:"center"
  },
  alreadyUserText: {
    textDecorationStyle: "dotted",
    textDecorationColor: "#3182CE",
    textDecorationLine: "underline",
    textShadowColor: "#3182CE",
    color: "#3182CE",
    padding: 5
  }
});
