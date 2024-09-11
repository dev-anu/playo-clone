import {View, Text, Pressable, Image, TextInput} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const BookScreen = () => {
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
    </SafeAreaView>
  );
};

export default BookScreen;
