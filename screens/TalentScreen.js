import { StyleSheet, Text, View, Pressable } from 'react-native'

import { useNavigation, useRoute, useLayoutEffect } from '@react-navigation/native'
import { Octicons } from '@expo/vector-icons';

const TalentScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Geegstar.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
      },
      headerStyle: {
        backgroundColor: "#B6BBC4",
        height: 70,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 12 }} />
      ),
    })
  }, [navigation]);

  return (
    <View>
      <Pressable>
        <Pressable>
        <Octicons name="arrow-switch" size={24} color="black" />
        <Text>Sort</Text>
        </Pressable>

        <Pressable>
          
        </Pressable>

        <Pressable>
          
        </Pressable>
      </Pressable>
    </View>
  )
}

export default TalentScreen

const styles = StyleSheet.create({})