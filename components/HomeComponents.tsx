import { Button } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Button
      title="Welcome"
      onPress={() => navigation.navigate('Menu', { name: 'Jane' })}
    />
  )
}

export default HomeScreen
