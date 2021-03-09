import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
function Items({item, onHandleClick}) {
    return (
        <View style={styles.container}>
            <View style={styles.itemBlock}>
                
                <View>
                <Text style={styles.itemText}>{item.text}
                
                </Text>
                </View>

                <View>
                <Text style={styles.btn}> <MaterialIcons name='delete' color='white' size={20} onPress={()=>onHandleClick(item.key)} /></Text>
                </View>
                {/*onPress={()=>onHandleClick(item.key)}<Button color='red' title='Delete'  /> */}
                </View>
               
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: 20,
        
    
      },
  
    styleButton:{
      
    },
    itemBlock:{
      flex:1,
        borderWidth: 1,
        borderColor: 'orange',
        padding:20,
        borderRadius: 10,
        width: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
      
    },
    itemText:{
       
        width: 160,
        color: 'skyblue'
        
    },
    btn:{
      borderRadius: 0
    }

  });

export default Items
