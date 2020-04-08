import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

import {categories} from './src/services/api';
import CategorySection from './src/components/CategorySection';
import Footer from './src/components/Footer';
import Welcome from './src/components/Welcome';
import TrackContent from './src/components/TrackContent';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.parentContainer}>
        <SafeAreaView>
          <View style={styles.container}>
            <FlatList
              style={styles.main}
              data={categories}
              keyExtractor={(category) => String(category.id)}
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
            <Footer />
          </View>
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

export default App;
