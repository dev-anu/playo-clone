import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


const PlayScreen = () => {
  const [option,setOptions]=useState("Calander");
  const [sport,setSport]=useState("Badminton");
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
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable onPress={()=> setSport("Badminton")} style={{
              padding:10,
              borderColor:"#fff",
              marginRight:10,
              borderRadius:8,
              borderWidth:sport === "Badminton"?0:1,
              backgroundColor:sport === "Badminton"?"#1dbf22":"transparent"
            }}>
              <Text style={{color:"#fff"}}>Badminton</Text>
            </Pressable>
            <Pressable onPress={()=> setSport("Cricket")}
            style={{
              padding:10,
              borderColor:"#fff",
              marginRight:10,
              borderRadius:8,
              borderWidth:sport === "Cricket"?0:1,
              backgroundColor:sport === "Cricket"?"#1dbf22":"transparent"
            }}>
              <Text style={{color:"#fff"}}>Cricket</Text>
            </Pressable>
            <Pressable onPress={()=> setSport("Football")} 
            style={{
              padding:10,
              borderColor:"#fff",
              marginRight:10,
              borderRadius:8,
              borderWidth:sport === "Football"?0:1,
              backgroundColor:sport === "Football"?"#1dbf22":"transparent"
            }}>
              <Text style={{color:"#fff"}}>Football</Text>
            </Pressable>
            <Pressable onPress={()=> setSport("BasketBall")}
            style={{
              padding:10,
              borderColor:"#fff",
              marginRight:10,
              borderRadius:8,
              borderWidth:sport === "BasketBall"?0:1,
              backgroundColor:sport === "BasketBall"?"#1dbf22":"transparent"
            }}>
              <Text style={{color:"#fff"}}>BasketBall</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#fff'
      }}>
        <Pressable>
          <Text style={{fontWeight:'bold'}}>Create Game</Text>
        </Pressable>
        <View style={{flexDirection:"row",alignItems:'center',gap:10}}>
        <Pressable>
          <Text style={{fontWeight:'bold'}}>Filter</Text>
        </Pressable>
        <Pressable>
          <Text style={{fontWeight:'bold'}}>Sort</Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;
