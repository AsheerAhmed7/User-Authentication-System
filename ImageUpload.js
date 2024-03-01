import React, { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Image, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import styles from "./styles";
const ImageUploader = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [image, setImage] = useState(null);
    const ImageUploadGallery = async () => {
        try {
            const img = await ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
            })
            setImage(img.path);
        } catch (error) {
            console.log(error.message);
        }
    }
    const ImageUploadCamera = async () => {
        try {
            const img2 = await openCamera({
                height: 400,
                width: 300,
                cropping: true
            })
            setImage(img2.path);
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1 }}>
            <Modal
            transparent={true}
            visible={modalVisibility}>
                <View style={styles2.wrapper}>
                    <View style={styles2.containor}>
                        <TouchableOpacity style={styles2.exit}
                        onPress={()=>setModalVisibility(false)}>
                            <Text style={{fontSize:18,color:'red',fontWeight:'bold'}}>X</Text>
                        </TouchableOpacity>
                    <View >
                        <TouchableOpacity style={styles2.button}
                        onPress={()=>{
                            ImageUploadCamera();
                            setModalVisibility(false)
                        }}>
                            <Image style={{height:50,width:50,borderRadius:25}} source={require("./myassets/camera.jpg")}></Image>
                            </TouchableOpacity>
                       <Text style={styles2.txt}>Open Camere</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles2.button}
                        onPress={()=>{
                            ImageUploadGallery();
                            setModalVisibility(false)
                        }}>
                            <Image style={{height:50,width:50,borderRadius:25}} source={require("./myassets/gallery.jpg")}></Image>
                            </TouchableOpacity>
                       <Text style={styles2.txt}>Open Gallery</Text>
                    </View>
                   
                    </View>
                </View>
            </Modal>
            <View style={styles.heading}>
    <Text style={{fontSize:24,fontWeight:'bold'}}>Image Uploader</Text>
   </View>
            <View style={{ height: 400, width: 300 , borderColor:'black',borderWidth:2}}>
                {
                    image ? <Image style={{ height: 400,width: 300 ,}} src={image.toString()}></Image> : null
                }
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={()=>setModalVisibility(true)}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => setImage(null)}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Delete Image</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles2 = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'

    },
    containor: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "black",
        height: 200,
        width: '100%',

    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: '#8a2be2',
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 2,

    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    },
    exit:{
        position:'absolute',right:0,top:0,backgroundColor:'white',
        borderWidth:2,height:30,width:30,
        borderRadius:15,justifyContent:'center',alignItems:"center"
    }

}
)
export default ImageUploader;