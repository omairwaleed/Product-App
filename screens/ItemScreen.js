import React from 'react'
import { View,Text,Image,FlatList, StyleSheet,ScrollView } from 'react-native'
//this screen show more information about each item

const ItemScreen = ({route}) => {
  const { customProp } = route.params;
  return (
    <ScrollView style={styles.container}>
      {/* <Image source={{uri: customProp.images[0]}} style={styles.image}/> */}
      <FlatList
        data={customProp.images}
        renderItem={({ item ,index}) => (
          <Image key={index} source={{uri: item}} style={styles.image}/>
        )}
        keyExtractor={(item,index) =>index }
        horizontal={true}
        style={styles.list}
      />
      <View style={{padding:10}}>
        <Text style={styles.title}>Description : <Text  style={styles.words}>{customProp.description}</Text> </Text>
        <Text style={styles.title}>Brand : <Text  style={styles.words}>{customProp.brand}</Text> </Text>
        <Text style={styles.title}>Category : <Text  style={styles.words}>{customProp.category}</Text> </Text>
        <Text style={styles.title}>Rating : <Text  style={styles.words}>{customProp.rating}</Text> </Text>
        <Text style={styles.title}>Price : <Text  style={styles.words}>{customProp.price}</Text> </Text>
        <Text style={styles.title}>Available in stock : <Text  style={styles.words}>{customProp.stock}</Text> </Text>
      </View>
        
      
      
    </ScrollView>
  )
}

export default ItemScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
},
list:{
  width:"100%",
  height:"38%"
},

  image:{
    width: 200,
    height: 250,
    margin: 10,
    resizeMode:"stretch"
  },
  title:{
    fontSize: 18,
    fontWeight:"600",
    marginBottom:5,
    color:"black"
  },
  words:{
    fontWeight:"400",
    fontSize: 16,
    color:"black"
  }

});