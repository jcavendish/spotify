import React from 'react';
import {View} from 'react-native';
import Footer from './Footer';

export default function SearchScreen({navigation}) {
  function handleNavitation(route) {
    navigation.navigate(route);
  }
  return (
    <Footer navigateTo={(route) => handleNavitation(route)} search={true} />
  );
}
