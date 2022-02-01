import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const Login = ({loginFunc}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    loginFunc({email, password});
  };

  return (
    <View>
      <View>
        <Text>Welcome to YourMovies!</Text>
        <Text>Your personal guide to the world of cinema</Text>
      </View>

      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} />
      </View>

      <View>
        <Text>Email</Text>
        <TextInput testID="email_input" value={email} onChangeText={setEmail} />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          testID="password_input"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View>
        <Button
          testID="login_button"
          title="Login"
          color="#ff3559"
          onPress={loginUser}
        />
      </View>
    </View>
  );
};

export default Login;
