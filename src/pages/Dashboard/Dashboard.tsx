import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';

const Dashboard = ({navigation}: any) => {
  const openSignIn = () => {
    navigation.navigate('SignInPage');
  };

  return (
    <NativeBaseProvider>
      <View style={styles.layout}>
        <Text
          style={styles.text}
          onPress={() => {
            openSignIn();
          }}>
          My App
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  layout: {
    backgroundColor: '#2a2a2a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 5,
    backgroundColor: '#2a2a2a',
    height: 500,
    width: '100%',
    alignItems: 'center',
  },
  signInInputArea: {
    backgroundColor: 'transparent',
    width: 350,
    flex: 0.5,
    top: 20,
    alignItems: 'center',
    color: 'white',
  },
  signUpInputArea: {
    backgroundColor: 'transparent',
    width: 350,
    flex: 0.5,
    alignItems: 'center',
    bottom: 20,
  },
  signInBtn: {
    backgroundColor: '#F9C86A',
    color: 'red',
    width: '100%',
    marginTop: 30,
  },
  signUpBtn: {
    backgroundColor: '#F9C86A',
    color: 'red',
    width: '100%',
    marginTop: 15,
  },
  signInBtnTxt: {
    color: '#2E2D2D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpTxtArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: '6%',
  },
  signUpTxt: {
    color: 'white',
    fontSize: 16,
    top: 200,
  },
  signInTxt: {
    color: 'white',
    fontSize: 16,
    top: 150,
  },
  inputStyle: {
    color: 'white',
    backgroundColor: '#4b5563',
    textAlign: 'left',
  },
});
