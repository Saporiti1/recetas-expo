import "./ignoreWarnings";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';

import Favoritos from './screens/Favoritos';
import Login from './screens/Login';
import Home from './screens/Home';
import NewAccount from './screens/NewAccount';
import NewAccount2 from './screens/NewAccount2';
import CrearReceta from './screens/CrearReceta';
import Busqueda from './screens/Busqueda';
import Receta from './screens/Receta';
import ResetPassword from './screens/ResetPassword';
import ResetPassword2 from './screens/ResetPassword2';
import Comentarios from './screens/Comentarios';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Favoritos' component={Favoritos} />
        <Stack.Screen name='NewAccount' component={NewAccount} />
        <Stack.Screen name='NewAccount2' component={NewAccount2} />
        <Stack.Screen name='CrearReceta' component={CrearReceta} />
        <Stack.Screen name='Busqueda' component={Busqueda} />
        <Stack.Screen name='Receta' component={Receta} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='ResetPassword2' component={ResetPassword2} />
        <Stack.Screen name='Comentarios' component={Comentarios} />

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