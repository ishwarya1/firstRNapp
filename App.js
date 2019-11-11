/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('I am a console statement');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text>Welcome to C308 Web Frameworks!</Text>
              <Text style={styles.sectionTitle}>Recommended Eats @RP</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>W6 Level 1 , E-canteen
                </Text>Waffles with chocolate
                dip, Belgian Waffles, Fruit Fondue, Royal
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>ice cream</Text>
              <Text style={styles.sectionDescription}><Text style={styles.highlight}>E6 Level 1 , E-canteen
              </Text>This was my first time visiting Holland Village for something other than beer. Surprisingly, I still left extremely happy, full, and a little tipsy! While David manages the operational side of the cafe, his father handles the production of ice-cream.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Western</Text>
              <Text style={styles.sectionDescription}><Text style={styles.highlight}>E6 Level 1 , E-canteen
              </Text>However, whenever my friends and I talk about affordable, value-for-money Western food, Astons is always the first place that comes to mind. However, I’m here to show you that there are plenty of alternatives in our hawker centres that are cheaper (and might even be better) than Astons!


                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
