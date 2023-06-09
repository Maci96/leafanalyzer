import { TextInput, Button, Avatar, Text, ActivityIndicator, Modal } from "react-native-paper"
import { StyleSheet, TouchableOpacity, View, Image, } from 'react-native';
import { useState, useEffect } from "react";
export default function ShowImage({ navigation, photoUri }) {
    const [showActivityInd, setShowActivityInd] = useState(false)
    const AnalysePicture = () => {
        setShowActivityInd(prev => !prev)
    }
    const DeletePicture=()=>{
        console.log("delete clicked")
    }
    return (
        <View style={styles.container}>
            {photoUri && (
                <View style={styles.previewContainer}>
                    <Text style={styles.previewText}>Preview:</Text>
                    <Image source={{ uri: photoUri }} style={styles.previewImage} />
                    <View style={styles.ButtonsContainer}>
                        <Button onPress={AnalysePicture} style={styles.analyzeBTN}>analyze</Button>
                        <Button onPress={DeletePicture} style={styles.deleteBTN}>delete</Button>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showActivityInd}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!showActivityInd);
                        }}><ActivityIndicator animating={showActivityInd} color="#00ff00" size={"large"} /></Modal>
                    {/* <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal> */}

                </View>
            )}
        </View>
    )
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
    buttonContent: {
        height: 48,
        width: 150,
    },
    previewImage: {
        width: "80%",
        height: "50%",
        marginTop: 10,
    },
    previewContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    ButtonsContainer: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 75
    },
    analyzeBTN: { minHeight: 50, padding: 10, backgroundColor: "blue", width: "33%" },
    deleteBTN: { minHeight: 50, color: "white", padding: 10, backgroundColor: "red", width: "33%" }
});

