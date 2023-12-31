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
import DraggableModal from 'rn-draggable-modal';
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
      <DraggableModal
        modalVisible={isHalfModalVisible}
        setModalVisible={setHalfModalVisible}
        dragIconName="dots"
        // modalWidth="80%"
        modalInitialHeight={200}
        // hasDraggable={false}
        dragIconColor="skyblue"
        // numberOfDots={5}

        // hasDraggableIcon={false}
        // dragIconStyle={{
        //   //bar style
        //   backgroundColor: 'green',
        //   width: 40,
        //   height: 6,
        //   borderRadius: 3,
        // }}
        // dragIconStyle={{    //dots style
        //   backgroundColor: 'green',
        //   width: 8,
        //   height: 8,
        //   borderRadius: 4,
        //   marginHorizontal: 3,
        // }}
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
      </DraggableModal>
    </SafeAreaView>
  );
}

export default App;
