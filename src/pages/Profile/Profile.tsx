/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, FormControl, Input, NativeBaseProvider} from 'native-base';

const Profile = () => {
  function logOutOnAction(): void {
    console.log('Done');
  }

  return (
    <NativeBaseProvider>
      <View style={styles.layout}>
        <Text style={styles.text}>My App</Text>

        {/* profile area */}
        <View
          style={{
            margin: 5,
            backgroundColor: '#2a2a2a',
            height: 500,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={styles.profileArea}>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                isReadOnly={true}
                style={styles.inputStyle}
                size="md"
                placeholder=" Name"
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                isReadOnly={true}
                style={styles.inputStyle}
                size="md"
                placeholder=" example@abc.com"
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>

            <Button
              mt="2"
              style={styles.logOutBtn}
              borderRadius={10}
              onPress={() => logOutOnAction()}>
              <Text style={styles.logOutBtnTxt}>Log out</Text>
            </Button>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Profile;

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
  profileArea: {
    backgroundColor: 'transparent',
    width: 270,
    flex: 0.5,
    top: 20,
    alignItems: 'center',
    color: 'white',
  },
  inputStyle: {
    color: 'white',
    backgroundColor: '#4b5563',
    textAlign: 'left',
  },
  logOutBtn: {
    backgroundColor: '#F9C86A',
    color: 'red',
    width: '100%',
    top: 250,
  },
  logOutBtnTxt: {
    color: '#2E2D2D',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
