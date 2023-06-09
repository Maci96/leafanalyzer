import { TextInput, Text, Button } from "react-native-paper"
import { StyleSheet, View } from 'react-native';
import { useState } from "react";

export default function Signin({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeTitle} variant="titleLarge">welcome to leaf analyzer </Text>
        <Text style={styles.signinTitle} variant="titleLarge">Signin</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.emailInput}
          label="Email"
          mode="outlined"
          secureTextEntry={true}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.passwordInput}
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button style={styles.loginBTN} mode="contained" onPress={() => login()}>
          Login
        </Button>
      </View>
      <View style={styles.craeteAccount}><Text onPress={() => { console.log(navigation.navigate("Signup")) }} style={styles.craeteAccountText}>don't have an account, signup</Text></View>
    </View>
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
    marginTop: 120
  },
  loginBTN: {
    backgroundColor: "#38A169",
    color: "#fff",
    marginTop: 24
  },
  welcomeTitle: {
    marginTop: 28
  },
  signinTitle: {
    marginTop: 36
  },
  loginForm: {
    marginTop: 24,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    minheight: 200,
  },

  passwordInput: {
    marginTop: 20,
  },
  craeteAccount: {
    marginTop: 10,
    height: 50,
    display: "flex",
    flexDirection: "row-reverse",
    // justifyContent:"center"
  },
  craeteAccountText: {
    textDecorationStyle: "dotted",
    textDecorationColor: "#3182CE",
    textDecorationLine: "underline",
    textShadowColor: "#3182CE",
    color: "#3182CE",
    padding: 5
  }
});
