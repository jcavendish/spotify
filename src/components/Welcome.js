import React from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import globalStyles from '../../styles';
import {tracks} from '../services/api';

export default function Welcome() {
  return (
    <View>
      <Text style={globalStyles.defaultTitle}>Good afternoon</Text>
      <FlatList
        columnWrapperStyle={styles.listThumbnail}
        numColumns={'2'}
        data={tracks}
        keyExtractor={(track) => String(track.id)}
        renderItem={({item: track}) => (
          <View style={styles.trackThumbnail}>
            <Image source={{uri: track.img}} style={styles.imageThumbnail} />
            <Text style={styles.textThumbnail}>{track.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listThumbnail: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  trackThumbnail: {
    backgroundColor: '#202020',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    flex: 1,
  },
  textThumbnail: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  imageThumbnail: {
    width: 60,
    height: 60,
  },
});
