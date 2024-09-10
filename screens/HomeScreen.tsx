import { View, Text, ScrollView, Image, Pressable, ImageBackground } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View>
          <Text style={{ marginLeft: 15 }}>Anurag Tripathi</Text>
        </View>
      ),
      headerRight: () => (
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
      )
    });
  }, [navigation]);

  const data = [{
    id:10,
    image:"https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png",
    text:"Learn Tennis",
    description:"Know more"
  },
  {
    id:11,
    image:"https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png",
    text:"Up Your Game",
    description:"Find a coach"
  }]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <View style={{
        padding: 13,
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        shadowColor:"#000",
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.25,
        shadowRadius:2
      }}>
        <View>
          <Image
            style={{ width: 40, height: 40, borderRadius: 25 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
            }}
          />
        </View>
        <View>
          <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
            <Text>Set Your Weekly Fit Goal</Text>
            <Image
              style={{ width: 20, height: 20, borderRadius: 25 }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
              }}
            />
          </View>
          <Text style={{marginTop:8,color:"gray"}}>KEEP YOURSELF FIT</Text>
        </View>
      </View>
      <View style={{padding:13,backgroundColor:"#fff",marginVertical:6, borderRadius:12,marginHorizontal:13}}>
        <View style={{
          paddingHorizontal:10,
          paddingVertical:4,
          backgroundColor:"#E0E0E0",
          borderRadius:4,
          width:200,
          marginVertical:5
        }}>
          <Text style={{color:"#484848",fontSize:13}}>GEAR UP FOR YOUR GAME</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Text>Badminton Acitivity</Text>
          <Pressable
          style={{
            padding:10,
            backgroundColor:"#fff",
            borderRadius:7, 
            shadowColor:"#000",
            shadowOffset:{width:0,height:2},
            shadowOpacity:0.25,
            shadowRadius:3.84,
            width:80
          }}>
            <Text style={{textAlign:"center"}}>View</Text>
          </Pressable>
        </View>
        <Text style={{marginTop:4,color:"gray"}}>You have no Games Today</Text>
        <Pressable style={{marginTop:10,marginLeft:"auto",marginRight:"auto",marginBottom:5}}>
          <Text style={{fontSize:15,fontWeight:"600",textDecorationLine:"underline"}}>View My Calander</Text>
        </Pressable>
      </View>
      <View style={{padding:13,flexDirection:"row",alignItems:"center",gap:14}}>
        <Pressable style={{flex:1}}>
          <View style={{borderRadius:10}}>
            <Image style={{
              width:160,
              height:120,
              borderRadius:10
            }}
            source={{uri:"https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
          </View>
          <Pressable style={{backgroundColor:"#fff",padding:12,width:160,borderRadius:10}}>
            <View>
              <Text style={{fontSize:15,fontWeight:"500"}}>Play</Text>
              <Text style={{fontSize:15, color:"gray", marginTop:7}}>Find Players and join their activities</Text>
            </View>
          </Pressable>
        </Pressable>
        <Pressable style={{flex:1}}>
          <View style={{borderRadius:10}}>
            <Image style={{
              width:160,
              height:120,
              borderRadius:10
            }}
            source={{uri:"https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
          </View>
          <Pressable style={{backgroundColor:"#fff",padding:12,width:160,borderRadius:10}}>
            <View>
              <Text style={{fontSize:15,fontWeight:"500"}}>Book</Text>
              <Text style={{fontSize:15, color:"gray", marginTop:7}}>Book your slots in venues nearby</Text>
            </View>
          </Pressable>
        </Pressable>
      </View>
      <View style={{padding:13}}>
        <View style={{padding:10, backgroundColor:"#fff",borderRadius:10, flexDirection:"row",gap:10}}>
          <View style={{width:50, height:50,borderRadius:25,backgroundColor:"#29ABB7",padding:10,justifyContent:"center",alignItems:"center"}}>
            <AntDesign name="addusergroup" size={24} color="green"/>
          </View>
          <View>
            <Text style={{fontWeight:"bold"}}>Groups</Text>
            <Text style={{marginTop:10,color:"gray"}}>Connect, Compete and Discuss</Text>
          </View>
        </View>
        <View style={{padding:10, backgroundColor:"#fff",borderRadius:10, flexDirection:"row",gap:10,marginTop:10}}>
          <View style={{width:50, height:50,borderRadius:25,backgroundColor:"yellow",padding:10,justifyContent:"center",alignItems:"center"}}>
            <Ionicons name="tennisball-outline" size={24} color="green"/>
          </View>
          <View>
            <Text style={{fontWeight:"bold"}}>Game Time Activities</Text>
            <Text style={{marginTop:10,color:"gray"}}>355 Playo hosted games</Text>
          </View>
        </View>
      </View>
      <View style={{padding:13}}>
          <View style={{padding:10, backgroundColor:"#fff",borderRadius:10}}>
            <Text style={{fontSize:15,fontWeight:"500"}}>SpotLight</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>{data?.map((item,index)=>(
              <ImageBackground key={index} imageStyle={{borderRadius:10}} source={{uri:item?.image}} style={{width:180,height:240,marginRight:10,marginTop:10}}>

              </ImageBackground>
            ) )}</ScrollView>
          </View>
      </View>
      <View>
        <View style={{marginRight:'auto', marginLeft:"auto"}}>
          <Image style={{width:120, height:70,resizeMode:'contain'}}
          source={{uri:"https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png"}}/>
        </View>
        <Text style={{color:"gray",textAlign:"center", marginBottom:5}}>Your Sports community app</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
