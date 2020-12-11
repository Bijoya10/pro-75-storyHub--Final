import * as React from "react";
import {View,Text,StyleSheet} from "react-native";
import {Header} from "react-native-elements"

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor="blue"
                    centerComponent={{text:"Read Screen",style:{fontWeight:"bold",fontSize:20,color:"white",justifyContent:"center"}}}
                />
                <Text>
                    ReadStoryScreen
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center"
    }
})

