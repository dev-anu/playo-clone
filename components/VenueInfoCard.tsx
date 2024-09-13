import { View, Image, ScrollView,Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const VenueInfoCard = () => {
    const route:any = useRoute();
  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <>
            <View>
                <Image
                    style={{height:200}}
                    source={{uri:route?.params?.item?.image}}
                />
            </View>
            <View>
                <Text style={{padding:5, fontWeight:"600"}}>{route?.params?.item?.name}</Text>
            </View>
            <View style={{
                marginTop:5,
                flexDirection:'row',
                alignItems:"center",
                gap:5
            }}>
            <Ionicons name="time-outline" size={25} color="#000"/>
            <Text style={{fontSize:15,fontWeight:"500"}}>6:00 AM - 11:00 PM</Text>
            </View>
            <View style={{flexDirection:"row",gap:5,marginVertical:8}}>
            <Ionicons name="location-outline" size={25} color="#000"/>
            <Text style={{fontSize:14,width:"80%",fontWeight:"500"}}>{route?.params?.item?.location}</Text>
            </View>
            <View style={{padding:10,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <View style={{flexDirection:"row"}}>
                    {[0,0,0,0,0].map((en,i)=>(
                        <FontAwesome size={15} color="#FFD700"
                        style={{paddingHorizontal:3}}
                        name={i < Math.floor(route?.params?.item?.rating)?'star':'star-o'}/>
                    ))}
                    <Text>{route?.params?.item?.rating} (9 ratings)</Text>
                </View>
                <View>
                    <Text>100 total Activities</Text>
                </View>
                <View>
                
            </View>
            </View>
            <View style={{marginHorizontal:10, flexDirection:"row"}}>
            <Pressable style={{
                    width:160,
                    borderColor:'#6868686',
                    borderWidth:1,
                    borderRadius:5,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:10,
                    marginRight:20
                }}>
                    <Text>Rate Venue</Text>
                </Pressable>
                <Pressable style={{
                    width:160,
                    borderColor:'#6868686',
                    borderWidth:1,
                    borderRadius:5,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:10
                }}>
                    <Text>1 Upcoming</Text>
                </Pressable>
            </View>
            <Text style={{fontSize:15, marginHorizontal:10, fontWeight:"500",marginTop:5}}>Sports Available</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {route?.params?.item?.sportsAvailable?.map((item:any,index:any)=> (
                    <View style={{
                        borderColor:"#686868",
                        margin:10,
                        padding:20,
                        width:130,
                        height:90,
                        borderWidth:1,
                        borderRadius:5
                    }}>
                        <MaterialCommunityIcons
                        style={{textAlign:"center"}}
                        name={item.icon}
                        size={24}
                        color="gray"
                        />
                       <Text style={{fontSize:13,fontWeight:"bold",textAlign:"center",marginTop:10}}>{item?.name}</Text>
                    </View>
                ))}
            </ScrollView>
            </>
        </ScrollView>
    </SafeAreaView>
  )
}

export default VenueInfoCard