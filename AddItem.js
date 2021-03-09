import React,{useState} from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

function AddItem({addHandleClick}) {

 const [text , setText]= useState('')

 const textHandler=(val)=>{
     setText(val)
 }



    return (
        <View style={styles.main}>
            <View>
            <TextInput placeholder='Add Task' multiline style={styles.textInput} onChangeText={textHandler}/>
            </View>
            <View style={styles.btn}>
            <Button title='Add' onPress={()=> addHandleClick(text)} color="orange" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
        
    },
    textInput: {
      
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      margin: 20,
      width: 300,
      borderRadius: 10
      
  
    },
    btn: {
      
        width: 100,
        marginTop: 28,
        

    }
    
  });
  

export default AddItem
