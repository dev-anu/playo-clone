import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'


const VenueCard = ({item}:any) => {
    const navigation:any = useNavigation();
  return (
    <View style={{margin:15}}>
        <Pressable style={{backgroundColor:"#fff",borderRadius:5,borderTopLeftRadius:10,borderTopRightRadius:10}}
        onPress={()=> navigation.navigate('Venue', {item})}>
            <View>
                <Image style={{width:"100%", height:200, borderTopLeftRadius:10, borderTopRightRadius:10}}
                source={{uri:item?.image}}/> 
            </View>
            <View style={{paddingHorizontal:10,paddingVertical:12}}>
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                    <Text>{item?.name?.length >30 ? item?.name?.substring(0,30)+'...':item?.name}</Text>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:6,
                        backgroundColor:'green',
                        padding:6,
                        borderRadius:5
                    }}>
                        <AntDesign name="star" size={20} color="#fff"/>
                        <Text style={{color:"#fff "}}>{item?.rating}</Text>
                    </View>
                </View>
                <Text style={{color:"gray"}}>{item?.address?.length >40 ? item?.address?.substring(0,40)+'...':item?.address}</Text>
                <View style={{height:1,borderWidth:0.6,borderColor:"#E0E0E0",marginVertical:10}}/>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text>Upto 10% Off</Text>
                    <Text>INR 350 Onwards</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default VenueCard