import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={styles.block}>
            <Text style={styles.itemText}>TODO APP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   
    itemText:{
        
       
        
        color: 'white',
        textAlign: 'center',
        width: 70
        
        
    },

    block:{
         
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor:'orange',
        paddingHorizontal: 210,
        paddingVertical: 15,
        marginTop:0,
        
        
    }


  });

export default Header
