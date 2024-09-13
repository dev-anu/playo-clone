import {View, Text, Pressable, Image, TextInput, FlatList} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import VenueCard from '../components/VenueCard';

const BookScreen = () => {
  let venues = [
    {
      id: '0',
      name: "DDSA - St.Joseph's Boys' High School (European)",
      address: 'Ashok Nagar',
      newImage:
        'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
      image:
        'https://plus.unsplash.com/premium_photo-1681843601864-78c834c4914e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location:
        'No. 27, Museum Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka',
      rating: 3.6,
      timings: '5.30 AM - 9:00 PM',
      sportsAvailable: [
        {
          id: '10',
          name: 'Badminton',
          icon: 'badminton',
          price: 500,
          courts: [
            {
              id: '10',
              name: 'Standard synthetic court 1',
            },
            {
              id: '11',
              name: 'Standard synthetic court 2',
            },
            {
              id: '12',
              name: 'Standard synthetic court 3',
            },
          ],
        },
        {
          id: '11',
          name: 'Cricket',
          icon: 'cricket',
          price: 1100,
          courts: [
            {
              id: '10',
              name: 'Full Pitch 1',
            },
            {
              id: '11',
              name: 'Full Pitch 2',
            },
          ],
        },
        {
          id: '12',
          name: 'Tennis',
          icon: 'tennis',
          price: 900,
          courts: [
            {
              id: '10',
              name: 'Court 1',
            },
            {
              id: '11',
              name: 'Court 2',
            },
          ],
        },
      ],
    },
    {
      id: '1',
      image:
        'https://playo.gumlet.io/PANCHAJANYABADMINTONFITNESSACADEMY/panchajanyabadmintonfitnessacademy1597334767773.jpeg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp',
      name: 'Panchajanya Badminton & Fitness Academy',
      address: 'Kittur Rani Chennamma Stadium',
      location:
        'Gate 01, Kittur Rani Chennamma Stadium, Sports Complex, Jayanagar, Jayanagar East, Byrasandra, Jayanagar, Bengaluru, Karnataka - 560011',
      rating: 4.0,
      newImage:
        'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
      timings: '5 AM - 10 PM',
      sportsAvailable: [
        {
          id: '10',
          name: 'Badminton',
          icon: 'badminton',
          price: 500,
          courts: [
            {
              id: '10',
              name: 'Standard synthetic court 1',
            },
            {
              id: '11',
              name: 'Standard synthetic court 2',
            },
            {
              id: '12',
              name: 'Standard synthetic court 3',
            },
          ],
        },
        {
          id: '11',
          name: 'Cricket',
          icon: 'cricket',
          price: 1100,
          courts: [
            {
              id: '10',
              name: 'Full Pitch 1',
            },
            {
              id: '11',
              name: 'Full Pitch 2',
            },
          ],
        },
        {
          id: '12',
          name: 'Tennis',
          icon: 'tennis',
          price: 900,
          courts: [
            {
              id: '10',
              name: 'Court 1',
            },
            {
              id: '11',
              name: 'Court 2',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Sportexx',
      image:
        'https://playo.gumlet.io/SPORTEXX20220319100016960702/sportexx1647683524186.jpg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp',
      address: 'Hebbal Kempapura',
      location: '#43/2, 3rd Cross, Sonnappa Layout, Bhuvaneshwari Nagar',
      rating: 4.1,
      newImage:
        'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
      timings: '5.30 AM - 9:00 PM',
      sportsAvailable: [
        {
          id: '10',
          name: 'Badminton',
          icon: 'badminton',
          price: 500,
          courts: [
            {
              id: '10',
              name: 'Standard synthetic court 1',
            },
            {
              id: '11',
              name: 'Standard synthetic court 2',
            },
            {
              id: '12',
              name: 'Standard synthetic court 3',
            },
          ],
        },
        {
          id: '11',
          name: 'Cricket',
          icon: 'cricket',
          price: 1100,
          courts: [
            {
              id: '10',
              name: 'Full Pitch 1',
            },
            {
              id: '11',
              name: 'Full Pitch 2',
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#f5f5f5"}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
            <Text style={{fontSize:16,fontWeight:"500"}}>Anurag Tripathi</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff"/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center',gap:10,marginRight:15 }}>
          <Ionicons name="chatbox-outline" size={25} color="#000" style={{ marginRight: 10 }} />
          <Ionicons name="notifications-outline" size={25} color="#000" style={{ marginRight: 10 }} />
          <Pressable>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1666298862681-c993ceb7865e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
            />
          </Pressable>
          </View>
        </View>
        <View style={{marginHorizontal:12, backgroundColor:"#E8E8E8",padding:12,flexDirection:"row", justifyContent:"space-between",borderRadius:20,marginTop:5}}>
          <TextInput placeholder='Search For Venue'/>
          <Ionicons name="search" size={24}/>
        </View>
        <Pressable style={{flexDirection:"row",alignItems:"center",gap:10,padding:13}}>
          <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0",borderWidth:1}}>
            <Text>Sports & Available</Text>
          </View>
          <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0",borderWidth:1}}>
            <Text>Favorites</Text>
          </View>
          <View style={{padding:10, borderRadius:10, borderColor:"#E0E0E0",borderWidth:1}}>
            <Text>Offers</Text>
          </View>
        </Pressable>
        <FlatList data={venues} renderItem={({item})=> <VenueCard item={item}/>} 
        contentContainerStyle={{paddingBottom:20}}
        showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
};

export default BookScreen;
