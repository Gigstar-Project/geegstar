import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PropertyCard from '../components/PropertyCard';
import { ScrollView } from 'react-native-web';

const TalentScreen = () => {
  const route = useRoute();
  const data = [
    {
      id: "0",
      name: "Burna Boy",
      Stack: "Singer",
      placeImage: "https://consequence.net/wp-content/uploads/2023/09/burna-boy-2023-tour.jpg?resize=1031,580",
      style: "Afro Fusion",
      properties: [
      {
        id: "12",
        label: "Space Ship",
        image: "https://crackmag.wpenginepowered.com/wp-content/uploads/2020/02/Issue-109-Cover-RGB-Web-scaled.jpg",
        location: "Nigeria",
        bookingfee: "100million"
      }]
    },
    {
      id: "1",
      name: "Davido",
      country: "Nigerian",
      placeImage: "https://dailypost.ng/wp-content/uploads/2023/04/Davido.jpeg",
      style: "Afro Beats",
      properties: [
      {
        id: "10",
        label: "DMW",
        image: "https://dailypost.ng/wp-content/uploads/2023/04/Davido.jpeg",
        location: "Nigeria",
        bookingfee: "90million"
      }]
    },
    {
      id: "2",
      name: "Wizkid",
      Stack: "Singer",
      placeImage: "https://dailypost.ng/wp-content/uploads/2022/11/Collage-Maker-04-Nov-2022-08.38-PM-1536x1025.jpg",
      style: "Afro Beats",
      properties: [
      {
        id: "9",
        label: "StarBoy",
        image:"https://dailypost.ng/wp-content/uploads/2022/11/Collage-Maker-04-Nov-2022-08.38-PM-1536x1025.jpg",
        location: "Nigeria",
        bookingfee: "100million"
      }]
    },
    {
      id: "3",
      name: "Omah Lay",
      Stack: "Singer",
      placeImage: "https://i.pinimg.com/564x/48/49/79/4849791e13ac05f29ada8cfe0c799bb5.jpg",
      style: "Afro Fusion",
      properties: [
      {
        id: "5",
        label: "Lay Sound",
        image: "https://i.pinimg.com/564x/48/49/79/4849791e13ac05f29ada8cfe0c799bb5.jpg",
        location: "Nigeria",
        bookingfee: "50million"
      }]
    }
  ];
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Talent Search Page",
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
    });
  }, [navigation]);

  return (
   
      <View style={{backgroundColor: "#f5f5f5"}}>
      {data
        ?.filter((item) => item.image === route.params.image)
        .map((item) =>
          item.properties.map((property, index) => (
            <PropertyCard 
            key={index}
            name={route.params.name}
            selectedDates={route.params.selectedDates}
            property={property} 
            />
          ))
        )}
   
    </View>
  );
};

export default TalentScreen;

const styles = StyleSheet.create({});

