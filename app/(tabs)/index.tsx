import { Text } from 'react-native';
import { Link } from 'expo-router';
import '@/global.css'
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind!</Text>
        <Link href="/(auth)/sign-up">Create Account</Link>
        <Link href="/(auth)/log-in">Log In</Link>
    </SafeAreaView>
  );
}
