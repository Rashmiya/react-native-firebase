import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  FormControl,
  Input,
  Link,
  NativeBaseProvider,
} from 'native-base';

const SignInPage = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function openSignUpModel(): any {
    navigation.navigate('SignUpPage');
  }

  function signInOnAction(): void {
    console.log('done');
  }

  return (
    <NativeBaseProvider>
      <View style={styles.layout}>
        <Text style={styles.text}>My App</Text>

        {/* sign in model area */}
        <View style={styles.modalView}>
          <View style={styles.signInInputArea}>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                value={email}
                placeholder=" example@abc.com"
                borderColor={'#4b5563'}
                borderRadius={10}
                onChangeText={e => {
                  setEmail(e);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                type="password"
                value={password}
                placeholder=" password"
                borderColor={'#4b5563'}
                borderRadius={10}
                onChangeText={e => {
                  setPassword(e);
                }}
              />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'white',
                }}
                alignSelf="flex-end"
                mt="1">
                Forgot Password?
              </Link>
            </FormControl>
            <Button
              mt="2"
              style={styles.signInBtn}
              borderRadius={10}
              onPress={() => signInOnAction()}>
              <Text style={styles.signInBtnTxt}>Sign in</Text>
            </Button>

            <View style={styles.signUpTxtArea}>
              <Text style={styles.signUpTxt}>Don't have an account.</Text>
              <Link
                _text={{
                  fontSize: '16',
                  color: '#F9C86A',
                  top: 200,
                }}
                onPress={() => openSignUpModel()}>
                Sign up
              </Link>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default SignInPage;

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
    width: 250,
    flex: 0.5,
    top: 20,
    alignItems: 'center',
    color: 'white',
  },
  signInBtn: {
    backgroundColor: '#F9C86A',
    color: 'red',
    width: '100%',
    top: 150,
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
  inputStyle: {
    color: 'white',
    backgroundColor: '#4b5563',
    textAlign: 'left',
  },
});
