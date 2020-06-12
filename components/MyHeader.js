import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
  } from 'react-native';
  import {Header,Icon}from 'react-native-elements';
const MyHeader=props=>{
    return(
        <Header 
    centerComponent={{text:props.title,style={color:'orange',fontSiza:20,fontWeight:'bold'}}}
        backgroundColor='blue'
        > 

        </Header>
    )
}
export default MyHeader;