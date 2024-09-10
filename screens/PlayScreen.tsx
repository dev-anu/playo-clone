import {Image, Pressable, Text, View} from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


const PlayScreen = () => {
  const [option,setOptions]=useState("Calander");
  return (
    <SafeAreaView>
      <View style={{padding:12,backgroundColor:"#223536"}}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
            <Text style={{fontSize:16,fontWeight:"500",color:"#fff"}}>Anurag Tripathi</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff"/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center',gap:10,marginRight:15 }}>
          <Ionicons name="chatbox-outline" size={25} color="#fff" style={{ marginRight: 10 }} />
          <Ionicons name="notifications-outline" size={25} color="#fff" style={{ marginRight: 10 }} />
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
        <View style={{flexDirection:"row",alignContent:"center",gap:10,marginVertical:13}}>
          <Pressable onPress={()=>setOptions('Calander')}><Text style={{fontWeight:'500',
            fontSize:15,
            color:option === 'Calander'? "#12e04c":"#fff"
          }}>Calander</Text></Pressable>
          <Pressable  onPress={()=>setOptions('MySports')}><Text style={{fontWeight:'500',
            fontSize:15,
            color:option === 'MySports'? "#12e04c":"#fff"
          }}>My Sports</Text></Pressable>
          <Pressable onPress={()=>setOptions('OtherSport')}><Text style={{fontWeight:'500',
            fontSize:15,
            color:option === 'OtherSport'? "#12e04c":"#fff"
          }}>Other Sports</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;
