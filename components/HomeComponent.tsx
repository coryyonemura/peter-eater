import { Text } from '@/components/Themed'
import React, { useState } from 'react'
import { Button, StyleSheet, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from 'react-native'

import { Text, View } from './Themed'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#0064a4',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
  },
  itemTouchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
})

export default function MenuComponent({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => console.log(`pressed ${item}`)}
              style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
          </View>
        )
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView >
  )
}
