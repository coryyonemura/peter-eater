import { Text, Button, ScrollView, StyleSheet } from 'react-native'

import { styles } from '../constants/Styles'

const ReviewScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
      <Text style={styles.header}>Review Screen</Text>
      <Text style={styles.subhead}>Brandywine</Text>
      <Text style={styles.item}>Food Title</Text>
      <Text style={styles.item}>Rating: 4</Text>
      <Button
        title="Submit"
      // onPress={() =>
      //     navigation.navigate('Menu', { name: 'Jane' })
      // }
      />
    </ScrollView>
  )
}

export default ReviewScreen
