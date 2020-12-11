import * as React from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import {Header} from "react-native-elements"; 


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor={"blue"}
                    centerComponent={{text:"Write Story", style:{fontWeight:"bold",fontSize:20,color:"white",justifyContent:"center"}}}/>
                <TextInput 
                    style={styles.inputBox}
                    placeholder={"title"}/>
                <TextInput 
                    style={styles.inputBox}
                    placeholder={"author"}/>
                <TextInput 
                    placeholder={"Write your story"}
                    multiline
                    style={[styles.inputBox,{height:200}]}
                    />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        marginTop:20,
        width:"80%",
        height:50,
        textAlign:"center",
        borderWidth:0.5
    },
    button:{
        marginTop:20,
        width:"50%",
        height:50,
        textAlign:"center",
        borderWidth:0.5,
        backgroundColor:"grey",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontSize:15,
        fontWeight:"bold",
        color:"white"
    }
  });
  