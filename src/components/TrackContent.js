import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CONTENT_SIZE = 150;
const BASE_URL = 'http://localhost:3333/images';

export default function TrackContent({track, imgStyle}) {
  return (
    <View style={styles.imageContent}>
      <Image
        source={{uri: `${BASE_URL}/${track.title.toLowerCase()}.jpg`}}
        style={{width: CONTENT_SIZE, height: CONTENT_SIZE, ...imgStyle}}
      />
      <Text style={styles.ownersText}>{track.astist}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContent: {
    width: CONTENT_SIZE,
    padding: 0,
    marginRight: 15,
  },
  ownersText: {
    color: '#808080',
    fontWeight: '500',
  },
});
