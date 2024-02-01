import { Text, View } from '../components/Themed'

import { styles } from '../constants/Styles'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  )
}
