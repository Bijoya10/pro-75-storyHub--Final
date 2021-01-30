import * as React from "react";
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image,ToastAndroid} from "react-native";
import {Header} from "react-native-elements";
import firebase from "firebase"

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
    userLogin=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password)
        .then(()=>{
            this.props.navigation.navigate("Write")
        })
        .catch((error)=>{
            ToastAndroid.show(error.message,ToastAndroid.LONG)
        })
        
    }
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor="navy"
                    centerComponent={{text:"Story Hub",style:{color:"white",fontSize:20,fontWeight:"bold"}}}/>
                <Image
                    source={require("../assets/book.jpg")}
                    style={styles.imageStyle}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Email Address"
                    keyboardType={"email-address"}
                    value={this.state.emailId}
                    onChangeText={(text)=>{
                        this.setState({emailId:text})
                    }}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text)=>{
                        this.setState({password:text})
                    }}
                />
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.userLogin()
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center"
    },
    button:{
        backgroundColor:"grey",
        padding:20,
        marginTop:30,
        borderRadius:5,
        width:"50%",
        justifyContent:"center",
        alignItems:"center"
    },
    inputBox:{
        borderWidth:1,
        borderColor:"green",
        marginTop:30,
        fontSize:20,
        width:"80%",
        padding:15

    },
    buttonText:{
        fontSize:15,
        fontWeight:"bold"
    },
    imageStyle:{
        width:"60%",
        height:"40%",
        borderRadius:10,
        marginTop:10
    }
})