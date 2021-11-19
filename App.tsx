import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackScreen } from './src/helpers/types';
import { ProductScreen } from './src/Screens/ProductScreen';
import { ProductListScreen } from './src/Screens/ProductListScreen';

const Stack = createNativeStackNavigator<StackScreen>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
