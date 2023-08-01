/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HalfModal from './src/Component/HalfModal';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.dark,
  };
  const [isHalfModalVisible, setHalfModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={{flexGrow: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button
        onPress={() => setHalfModalVisible(!isHalfModalVisible)}
        title="Open Modal"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <HalfModal
        modalVisible={isHalfModalVisible}
        setModalVisible={setHalfModalVisible}
        // modalHeight={200}
        // dragIconStyle={{
        //   width: 80,
        //   height: 20,
        // }}
        // children={
        //<ScrollView
        // contentContainerStyle={{
        //  backgroundColor: 'red',
        // flexGrow: 1,
        //   paddingHorizontal: scale(5),
        // }}>
        //</SafeAreaView> <Text>askjndkakjdjnqjdqwnqwndwqd ndqowd wn</Text>
        // </ScrollView>
        // }
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            // paddingHorizontal: 5,
            // backgroundColor: 'red',
          }}>
          {/* <Text>This is half modal</Text> */}
        </ScrollView>
      </HalfModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
