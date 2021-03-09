import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import Items from './Items'
import Header from './Header'
import AddItem from './AddItem'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const onHandleClick= (key) =>{
     
    setTodos((Prev)=> {
      return Prev.filter(todo=> todo.key!=key)
    })
    
  }

  const addHandleClick= (text) =>{
    if(text.length < 4){
      Alert.alert('ALERT', 'Enter more info!',[ {text: 'GO BACK!'}])
    }
    else{
      setTodos((Prev)=> {
        return [{text: text, key: Math.random().toString()}, ...todos ]
      })
    }
    
  }

  return (
    <View style={styles.container}>
     {/*Header */}
     <Header/>
      <View style={styles.container1}>
        {/* Add items */}
        <AddItem addHandleClick={addHandleClick}/>
      <View style={styles.itemBlock}>
       <FlatList
        data={todos}
        renderItem={({item})=>(
          <Items item={item} onHandleClick={onHandleClick}/>
  )}
      
       />
      

      </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 50

  },

  styleButton:{
    marginTop: 20
  },
  container1:{
    flex: 1
  },
  itemBlock:{
    flex: 1
  }
  
});
