import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MenuComponent from './components/MenuComponent'
import HomeComponent from './components/HomeComponents'
import ReviewComponent from './components/ReviewComponents'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponent} />

        <Stack.Screen name="Menu" component={MenuComponent} />

        <Stack.Screen name="Review" component={ReviewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
