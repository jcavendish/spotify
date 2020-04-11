import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

export default function IconButton({active, OnPress, icon, text}) {
  const styles = active ? activeStyles : defaultStyles;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.buttonContainer}
      onPress={() => OnPress()}>
      {icon(styles.buttonIcon)}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const defaultStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#808080',
  },
  buttonIcon: {
    color: '#808080',
  },
});

const activeStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
  buttonIcon: {
    color: '#ffffff',
  },
});
