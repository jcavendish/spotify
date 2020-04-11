import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCI from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet} from 'react-native';
import IconButton from './IconButton';
MaterialCI.loadFont();
Entypo.loadFont();
Feather.loadFont();

export default function Footer({navigateTo, home, search, library}) {
  return (
    <View style={styles.footer}>
      <IconButton
        icon={(style) => <Entypo name="home" size={30} style={style} />}
        text="Home"
        OnPress={() => navigateTo('Home')}
        active={home}
      />
      <IconButton
        icon={(style) => <Feather name="search" size={30} style={style} />}
        text="Search"
        OnPress={() => navigateTo('Search')}
        active={search}
      />
      <IconButton
        icon={(style) => (
          <MaterialCI name="library-music" size={30} style={style} />
        )}
        text="Your library"
        OnPress={() => navigateTo('Home')}
        active={library}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 25,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#252525',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
