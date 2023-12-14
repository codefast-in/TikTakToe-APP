/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
 
  StyleSheet,
  Text,
  TouchableOpacity,
 
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.playerNameBox}>
          <Text style={styles.playerName}>Player O's Turn</Text>
        </View>
        <View style={styles.playground}>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>1</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>2</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>3</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>4</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>5</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>6</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>7</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>8</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <Text style={styles.playText}>9</Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity style={styles.resetBtn} > 
            <Text style={styles.resetBtnText}>Reload Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 20,
    width:undefined,
    height:undefined,
  },
  playerNameBox: {
    backgroundColor: '#0A79DF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
  playerName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  playground: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'stretch',
    flexDirection:'row',
    flexWrap:"wrap",
    marginVertical:20
  },
  box:{
    height:103,
    width:103,
    backgroundColor:'#EAF0F1',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:5,
    margin:5
    
  },
  playText:{
    color:'#2B2B52'
  },
  resetBtn:{
    backgroundColor: '#E44236',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
  resetBtnText:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  }
});

export default App;
