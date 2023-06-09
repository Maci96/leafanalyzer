import { TextInput, Button, Avatar, Text } from "react-native-paper"
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from "./card"
import { useState } from "react";
import Leafs from "../../fake_data";
export default function Main({navigation}) {
  const [username, setUsername] = useState("");
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {
            Leafs.map(el => {
              return <Card key={el.id} id={el.id} name={el.name} link={el.link} date={el.date} />
            })
          }
        </View>

      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon="camera"
          mode="contained"
          style={styles.floatingButton}
          contentStyle={styles.buttonContent}
          onPress={()=>{navigation.navigate('Camera')}}
        >
          New Picture
        </Button>
      </View>
    </View>
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
