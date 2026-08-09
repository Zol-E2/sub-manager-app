import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Link } from 'expo-router';

const LogIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  );
}

export default LogIn
