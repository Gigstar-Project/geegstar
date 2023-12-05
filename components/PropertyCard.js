

import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';

const PropertyCard = ({ name, selectedDates, property }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Pressable style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}>
        <View>
          <Image style={{ height: height / 4, width: width - 280 }} source={{ uri: property.image }} />
        </View>
      <View>
        <View>

          <Text>{property.name}</Text>
        </View>
      </View>
      </Pressable>
    </View>
  );
}

export default PropertyCard;

const styles = StyleSheet.create({});
