import React from 'react';

import { Login } from './src/screens/Login';
import { Unidades } from './src/screens/Unidades';
import { Produtos } from './src/screens/Produtos';
import { Busca } from './src/screens/Busca';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Login'>
            <Stack.Screen 
                name = 'Home' 
                component = {Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name = 'Unidades' 
                component = {Unidades}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name = 'Produtos' 
                component = {Produtos}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name = 'Busca' 
                component = {Busca}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}
