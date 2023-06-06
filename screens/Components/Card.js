import React from 'react'
import { View ,Text, TouchableOpacity,StyleSheet,Image} from 'react-native'

import Hide from './Hide'
//This component shows every item of the products

const Card = ({item,filter_items,Navigate_item_screen}) => {
    
  return (
    <TouchableOpacity style={styles.container} onPress={()=>Navigate_item_screen(item)}>
        <Image source={{uri: item.images[0]}} style={styles.image}/>
        <View style={{padding:10}}>
            <Text style={styles.category}>{item.brand}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description.split(" ").length>10?`${item.description.split(" ").slice(0,10).join(" ")}  ....`:item.description}</Text>
            <Text style={styles.price}>{item.price}$</Text>
            <Hide filter_items={filter_items} index={item.id}/>
        </View>
        

    </TouchableOpacity>
  )
}

export default Card
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        width:"80%",
        height:300,
        marginVertical:10,
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:25,
        borderColor:"#cce7d0",
        borderStyle:"solid",
        borderWidth:1,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
        
      
    },
    image:{
        width:"100%",
        height:"60%",
        resizeMode:"contain"
    },
    category:{
        textAlign:"left",
        color: "#606063",
        fontSize: 12
    },
    title:{
        paddingTop:7,
        color:"#F3BA19",
        fontSize:13,
        fontWeight:"bold",
    },
    description:{
        paddingTop:5,
        fontSize:10,
        color:"black"
    }
    ,
    price:{
        position:"absolute",
        top:92,
        left:10,
        color: "#088178"
       
    }
  });
