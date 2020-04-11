import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import globalStyles from '../../styles';

export default function CategorySection({category, render}) {
  return (
    <View style={styles.categorySection}>
      <Text style={globalStyles.defaultTitle}>{category.label}</Text>
      <FlatList
        horizontal={true}
        style={styles.imageList}
        data={category.tracks}
        keyExtractor={({record: track}) => track.title}
        renderItem={({item: track}) => render(track.record)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categorySection: {
    marginTop: 20,
  },
  imageList: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
