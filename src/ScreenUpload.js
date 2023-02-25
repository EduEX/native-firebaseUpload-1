import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../config'
import { MediaTypeOptions } from "expo-image-picker";

const ScreenUpload = () => {

    const [image, setImage] = useState(null)
    const [uploading, setUploading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })

        const source = {uri: result.uri}
        console.log(source)
        setImage(source)
    }

    const uploadImage = async () => {
        setUploading(true)
        const response = await fetch(image.uri)
        const blob = await response.blob()
        const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
        var ref = firebase.storage().ref().child(filename).put(blob)

        try{
            await ref
        }catch (e) {
            console.log(e)
        }

        setUploading(false)

        Alert.alert(
            'Image Uploaded!!'
        )

        setImage(null)
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.selectBut} onPress={pickImage}>
                <Text style={styles.textButton}>Pick An Image.</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>}
                <TouchableOpacity style={styles.uploadBut} onPress={uploadImage}>
                    <Text style={styles.textButton}>Upload Image</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    selectBut:{
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer:{
        marginTop: 30,
        marginBottom: 50, 
        alignItems: 'center'
    },
    uploadBut:{
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ScreenUpload