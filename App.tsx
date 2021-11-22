import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackScreen } from './src/helpers/types';
import { AddProductScreen } from './src/Screens/ProductScreen';
import { ProductListScreen } from './src/Screens/ProductListScreen';
import { ContextProvider } from './src/context/Context';
import { setI18nConfig, translate } from './src/helpers/translation/translation';
import { tokens } from './src/helpers/translation/appStructure';

const Stack = createNativeStackNavigator<StackScreen>();

export default function App() {
  setI18nConfig();

  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator>

          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
            options={{ headerShown: true, title: translate(tokens.screens.productListScreen.HeaderText), headerTitleStyle: { color: "white" }, headerStyle: { backgroundColor: "green" } }}
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
