import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  FormControl,
  Input,
  Link,
  NativeBaseProvider,
} from 'native-base';

const SignUpPage = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function openSignInModel(): any {
    navigation.navigate('SignInPage');
  }

  function signUpOnAction(): void {
    console.log('done');
  }

  return (
    <NativeBaseProvider>
      <View style={styles.layout}>
        <Text style={styles.text}>My App</Text>

        {/* sign up model area */}
        <View style={styles.modalView}>
          <View style={styles.signUpInputArea}>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                value={name}
                placeholder=" Jhone cammilus"
                onChangeText={e => {
                  setName(e);
                }}
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                value={email}
                placeholder=" example@abc.com"
                onChangeText={e => {
                  setEmail(e);
                }}
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                value={password}
                type="password"
                placeholder=" password"
                onChangeText={e => {
                  setPassword(e);
                }}
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                style={styles.inputStyle}
                size="md"
                type="password"
                value={confirmPassword}
                placeholder=" Confirm password"
                onChangeText={e => {
                  setConfirmPassword(e);
                }}
                borderColor={'#4b5563'}
                borderRadius={10}
              />
            </FormControl>

            <Button
              mt="2"
              style={styles.signUpBtn}
              borderRadius={10}
              onPress={() => signUpOnAction()}>
              <Text style={styles.signUpBtnTxt}>Sign up</Text>
            </Button>

            <View style={styles.signUpTxtArea}>
              <Text style={styles.signUpTxt}>Have an account.</Text>
              <Link
                _text={{
                  fontSize: '16',
                  color: '#F9C86A',
                  top: 150,
                }}
                onPress={() => openSignInModel()}>
                Sign in
              </Link>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default SignUpPage;

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
  signUpInputArea: {
    backgroundColor: 'transparent',
    width: 250,
    flex: 0.5,
    top: 20,
    alignItems: 'center',
    color: 'white',
  },
  signUpBtn: {
    backgroundColor: '#F9C86A',
    color: 'red',
    width: '100%',
    marginTop: 30,
  },
  signUpBtnTxt: {
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
    top: 150,
  },
  inputStyle: {
    color: 'white',
    backgroundColor: '#4b5563',
    textAlign: 'left',
  },
});
