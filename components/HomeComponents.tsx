import { TouchableOpacity, Text, View } from 'react-native'
import { styles } from '../constants/Styles'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Menu', { location: 'anteatery' })}
        style={[styles.item, styles.itemTouchable]}
      >
        <Text style={styles.title}>Anteatery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Menu', { location: 'brandywine' })}
        style={[styles.item, styles.itemTouchable]}
      >
        <Text style={styles.title}>Brandywine</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
