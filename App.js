import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addTodo'


export default function App() {
  // const [talk, setTalk] = useState('My First App')
  // const say = () =>  setTalk('Roheemah')
  // const [names, setNames] = useState([
  //   {name: 'Roheemah', id: 97},
  //   {name: 'Lateefat', id: 770},
  //   {name: 'Ameen', id: 970},
  //   {name: 'Roheemah', id: 97},
  //   {name: 'Lateefat', id: 778},
  //   {name: 'Ameen', id: 970},
  //   {name: 'Roheemah', id: 97},
  //   {name: 'Lateefat', id: 779},
  //   {name: 'Ameen', id: 970},
  //   {name: 'Roheemah', id: 97},
  //   {name: 'Lateefat', id: 77},
  //   {name: 'Ameen', id: 970},
  //   {name: 'Roheemah', id: 97},
  //   {name: 'Lateefat', id: 77},
  //   {name: 'Ameen', id: 970}
  // ])
  // const pressHandler = (id) => {
  //   let newName = names.filter((name) => name.id != id)
  //   setNames(newName)
  // }
  const [todos, setTodo] = useState([
      {name: 'Wash Plate', key:1},
      {name: 'Code Native', key:2},
      {name: 'REad Books', key:3},
      {name: 'Eat good food', key:4},
      {name: 'Wash Clothes', key:5}
    ])

    const pressHandler = (key) => {
      setTodo((prevTodo) => {
        return prevTodo.filter(todo => todo.key != key)
      })
    }
    const submitHandler = (text) => {
      if (text == '') {
        Alert.alert('Oops!', 'Todo cant be empty')
      } else if (text.length < 3) {
        Alert.alert('Oops!', 'Todo must be over 2 chars long', [
          {text: 'Understood?', onPress: () => console.log('alert closed')}
        ])
      } else {
        setTodo((prevTodo) => {
          return [
            {name:text, key: Math.random()},
            ...prevTodo
          ]
        })
      }
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>


    // <View style={styles.body}>
    //   <View style={styles.myText}>
    //     <Text style={styles.myRealText}>My First App</Text>
    //     <Text style={styles.myRealText}>{talk}</Text>
    //   </View>
    //   <View>
    //     <TextInput 
    //     style={styles.input} 
    //     placeholder='type' 
    //     onChangeText={(val) => setTalk(val)}/>
    //     <TextInput 
    //     style={styles.input} 
    //     placeholder='type' 
    //     onChangeText={(val) => setTalk(val)}
    //     keyboardType='numeric'
    //     />
    //   </View>
    //   {/* <ScrollView>
    //     {names.map((item) => {
    //       return (<Text key={item.key} style={styles.myText}>{item.name}</Text>)
    //     })}
    //   </ScrollView> */}
    //   <FlatList
    //   keyExtractor={(item) => item.id}
    //   numColumns={2}
    //   data={names}
    //   renderItem={({ item }) => (
    //     <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //       <Text style={styles.myText}>{item.name}</Text>
    //     </TouchableOpacity>
    //   )}
    //   />
    //   <Button title='say my name' onPress={say} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
    // marginTop: 40,
    // marginLeft: 6,
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
  // myText: {
  //   backgroundColor: 'red',
  //   fontSize: 45,
  //   flexDirection: 'row',
  //   marginBottom: 6,
  //   marginRight: 3
  // },
  // myRealText: {
  //   color: 'yellow',
  //   flexBasis: '40%',
  //   backgroundColor: 'green',
  //   margin: '5%'
  // },
  // input: {
  //   borderWidth: 1,
  //   width: 200,
  //   padding: 8,
  //   borderColor: '#777',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

