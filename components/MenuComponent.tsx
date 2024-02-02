import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { styles } from '../constants/Styles'

interface MenuItem {
  station: string
  foods: any[]
}

function FoodDisplay({ foodName }: { foodName: string }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => console.log(`pressed ${foodName}`)}
          style={[styles.item, styles.itemTouchable]}
        >
          <Text style={styles.title}>{foodName}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

function StationDisplay({
  stationName,
  foods,
}: {
  stationName: string
  foods: any[]
}) {
  return (
    <ScrollView>
      <Text style={styles.header}>{stationName}</Text>
      {foods.map((item) => (
        <FoodDisplay key={item.foodName} foodName={item.foodName} />
      ))}
    </ScrollView>
  )
}

export default function MenuComponent({
  navigation,
  route,
}: {
  navigation: any
  route: any
}) {
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const { location, title } = route.params
  const URL = 'http://localhost:5000/receive_data?location='

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${location}`)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setMenu(data)
      } catch (error) {
        console.error('Error fetching:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [location])

  useEffect(() => {
    navigation.setOptions({
      title: `${title} Menu`,
    })
  }, [title, navigation])

  return (
    <ScrollView>
      {loading && <ActivityIndicator size="large" />}
      {/* <Button */}
      {/*   title="Rate" */}
      {/*   onPress={() => navigation.navigate('Review', { name: 'Rate' })} */}
      {/* /> */}
      {!loading &&
        menu.map((item) => (
          <StationDisplay
            key={item.station}
            stationName={item.station}
            foods={item.foods}
          />
        ))}
    </ScrollView>
  )
}
