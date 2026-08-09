import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <SafeAreaView>
      <View>
        <Text>Subscription Details for ID: {id}</Text>
      </View>
    </SafeAreaView>
  )
}

export default SubscriptionDetails