import { Button, View } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Button
        title="Anteatery"
        onPress={() => navigation.navigate('Menu', { location: 'anteatery' })}
      />
      <Button
        title="Brandywine"
        onPress={() => navigation.navigate('Menu', { location: 'brandywine' })}
      />
    </View>
  )
}

export default HomeScreen
