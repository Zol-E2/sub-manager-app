import { Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>SignUp</Text>
      <Link href="/(auth)/log-in">Log In</Link>
    </SafeAreaView>
  );
};

export default SignUp;
