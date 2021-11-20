import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackScreen } from './src/helpers/types';
import { AddProductScreen } from './src/Screens/AddProductScreen';
import { ProductListScreen } from './src/Screens/ProductListScreen';
import { ContextProvider } from './src/context/Context';

const Stack = createNativeStackNavigator<StackScreen>();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator>

          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddProductScreen"
            component={AddProductScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </ContextProvider>
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
