import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

import api from '../services/api';
import CategorySection from './CategorySection';
import Footer from './Footer';
import Welcome from './Welcome';
import TrackContent from './TrackContent';
import parseProfile from '../utils/parseProfile';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get('profile')
      .then((response) => setData(parseProfile(response.data)))
      .catch((error) => {
        console.log('Error while fetching data');
      });
  }, []);

  function handleNavitation(route) {
    navigation.navigate(route);
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.parentContainer}>
        <SafeAreaView>
          <View style={styles.container}>
            <FlatList
              style={styles.main}
              data={data}
              keyExtractor={(category) => category.label}
              ListHeaderComponent={<Welcome />}
              renderItem={({item: category, index}) => {
                let trackComponent = (track) => <TrackContent track={track} />;
                if (index % 2 === 0) {
                  trackComponent = (track) => (
                    <TrackContent track={track} imgStyle={{borderRadius: 75}} />
                  );
                }
                return (
                  <CategorySection
                    category={category}
                    render={trackComponent}
                  />
                );
              }}
            />
          </View>
          <Footer navigateTo={(route) => handleNavitation(route)} home={true} />
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'black',
  },
  container: {
    backgroundColor:
      'linear-gradient(90deg, rgba(110,110,110,1) 0%, rgba(60,60,60,1) 10%, rgba(30,30,30,1) 26%, rgba(26,26,26,1) 59%, rgba(20,20,20,1) 100%);',
    height: '100%',
    justifyContent: 'space-between',
  },
  main: {
    backgroundColor: 'black',
    flex: 1,
    padding: 5,
  },
});
