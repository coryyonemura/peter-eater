import { useEffect, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native'

import { styles } from '../constants/Styles'

export function FoodDisplay({ foodName }: { foodName: string }) {
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

export function StationDisplay({
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

interface MenuItem {
  station: string
  foods: any[]
}

export default function MenuComponent({
  navigation,
  route,
}: {
  navigation: any
  route: any
}) {
  const [menu, setMenu] = useState<MenuItem[]>([])
  const { location } = route.params

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/receive_data?location=${location}`
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setMenu(data)
      } catch (error) {
        console.error('Error fetching:', error)
      }
    }

    fetchData()
  }, [location])

  return (
    <ScrollView>
      <Button
        title="Rate"
        onPress={() => navigation.navigate('Review', { name: 'Rate' })}
      />
      {menu.map((item) => (
        <StationDisplay
          key={item.station}
          stationName={item.station}
          foods={item.foods}
        />
      ))}
    </ScrollView>
  )
}
