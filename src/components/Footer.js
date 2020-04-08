import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCI from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, Text} from 'react-native';
MaterialCI.loadFont();

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
        <Entypo name="home" size={30} color="#ffffff" />
        <Text style={styles.buttonText}>Home</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Feather name="search" size={30} color="#808080" />
        <Text style={styles.buttonText}>Seach</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MaterialCI name="library-music" size={30} color="#808080" />
        <Text style={styles.buttonText}>Your library</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#252525',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#808080',
  },
});
