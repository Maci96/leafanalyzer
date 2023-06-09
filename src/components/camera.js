import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Button, Text } from "react-native-paper"
import ShowImage from './showimage';
export default function CameraCom() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraref = useRef(null);
    const [photoUri, setPhotoUri] = useState(null);
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    async function takePicture() {
        if (cameraref.current) {
            const { uri } = await cameraref.current.takePictureAsync();
            console.log(uri)
            setPhotoUri(uri);
        }
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.container}>
            {/* already have a picture*/}
            {photoUri && <ShowImage photoUri={photoUri} />}
            {/*no picture*/}
            {
                !photoUri && <Camera ref={cameraref} style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Button
                                icon="camera"
                                mode="contained"
                                style={styles.floatingButton}
                                contentStyle={styles.buttonContent}
                                onPress={takePicture}
                            >
                                Take Picture
                            </Button>
                            <Text style={styles.text}>Flip Camera</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    floatingButton: {
        borderRadius: 50,
        elevation: 4,
        marginBottom: 8,
    },
    buttonContent: {
        height: 48,
        width: 150,
    },
    previewImage: {
        width: 200, // adjust the width as needed
        height: 200, // adjust the height as needed
        marginTop: 10, // adjust the margin as needed
    },
    previewText: {
        fontSize: 20,
        fontStyle: "normal",
        alignSelf: "center"
    }
});
