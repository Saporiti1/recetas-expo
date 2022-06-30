import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';
import NewAccount from './screens/NewAccount';
import NewAccount2 from './screens/NewAccount2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='NewAccount' component={NewAccount} />
        <Stack.Screen name='NewAccount2' component={NewAccount2} />

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

/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import ResetPassword from './screens/ResetPassword';
import ResetPassword2 from './screens/ResetPassword2';
import NewAccount from './screens/NewAccount';
import NewAccount2 from './screens/NewAccount2';
import Recipe from './screens/Recipe';
import Reviews from './screens/Reviews';
import FavoritosRecetas from './screens/FavoritosRecetas';
import ResultadoBusqueda from './screens/ResultadoBusqueda';
import CreacionReceta from './screens/CreacionReceta';
import NavBarSup from './components/NavBarSup';
import NavBarInf from './components/NavBarInf';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='ResetPassword2' component={ResetPassword2} />
        <Stack.Screen name='NewAccount' component={NewAccount} />
        <Stack.Screen name='NewAccount2' component={NewAccount2} />
        <Stack.Screen name='Recipe' component={Recipe} />
        <Stack.Screen name='Reviews' component={Reviews} />
        <Stack.Screen name='FavoritosRecetas' component={FavoritosRecetas} />
        <Stack.Screen name='ResultadoBusqueda' component={ResultadoBusqueda} />
        <Stack.Screen name='CreacionReceta' component={CreacionReceta} />


      
        <Stack.Screen name='NavBarSup' component={NavBarSup} />
        <Stack.Screen name='NavBarInf' component={NavBarInf} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/