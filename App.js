import { TextInput, Button, Avatar, Text } from "react-native-paper"
import { StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import component
import Main from "./src/components/main"
import Signin from "./src/components/signin"
import Signup from "./src/components/signup"
import Camera from "./src/components/camera"
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F0FFF4",
    height: "100%",
    width: "100%",
    paddingTop: 20,
    paddingLeft: 10,
    flexWrap: "wrap"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  floatingButton: {
    borderRadius: 50,
    elevation: 4, // Add a shadow effect
  },
  buttonContent: {
    height: 48,
    width: 150,
  },
});
