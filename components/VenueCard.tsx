import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const VenueCard = ({item}:any) => {
  return (
    <View>
        <Pressable>
            <View>
                <Image style={{width:"100%", height:200, borderTopLeftRadius:10, borderTopRightRadius:10}}
                source={{uri:item?.image}}/> 
            </View>
            <View>
                <View>
                    <Text>{item?.name}</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default VenueCard