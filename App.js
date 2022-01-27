import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CButton from './components/Button';

export default function App() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };
  let decrementCount = () => {
    setCount(count - 1);
  };
  let resetCount = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
    <Text style={styles.counter}>Counter</Text> 
    <Text style={styles.t2}>{count}</Text>
    <View style={styles.box2}>
    <CButton title="+" action={incrementCount} />
    <CButton title="-" action={decrementCount} />
    </View>    
    <CButton title="Reset" action={resetCount} /> 
    </View>  
)}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'30%',
  },
  t2:{
    fontSize:20,
  },
  counter: {
    fontSize: 25,
  }
});