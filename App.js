import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, ImageBackground } from 'react-native';
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
    <ImageBackground style={styles.bg} source={require('./assets/bg.png')}>
    <Image source={require('./assets/fc.jpg')}
    />
    <Text style={styles.counter}>FULL</Text> 
    <Text style={styles.counter}>COUNTER</Text> 
    <Text style={styles.t2}>{count}</Text>
    <View style={styles.box2}>    
    <CButton color="#710193" title="+" action={incrementCount} />
    <CButton color="#710193" title="-" action={decrementCount} />
    </View>  
    <View style={styles.box3}>   
    <CButton color="#710193" title="Reset" action={resetCount} /> 
    </View> 
    </ImageBackground>  
    </View>
)}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    justifyContent: 'center',     
    alignItems: 'center',     
    flex: 1,     
    alignSelf: 'stretch',
    width: null,
  },
  box2:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'30%',
  },
  box3:{
    flexDirection: 'row',
    justifyContent: 'center',
    width:'30%',
  },
  t2:{
    color: 'white',
    fontSize: 50,
  },
  counter: {
    padding: 0,
    height: 75,
    color: 'white',
    fontSize: 25,
  }
});