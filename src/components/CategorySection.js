import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import globalStyles from '../../styles';

export default function CategorySection({category, render}) {
  return (
    <View style={styles.categorySection}>
      <Text style={globalStyles.defaultTitle}>{category.title}</Text>
      <FlatList
        horizontal={true}
        style={styles.imageList}
        data={category.tracks}
        keyExtractor={(track) => String(track.id)}
        renderItem={({item: track}) => render(track)}
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
