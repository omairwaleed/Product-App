import React from 'react'
import { View } from 'react-native'
import Card from './Card'
import {  StyleSheet,FlatList} from 'react-native';
import Slider from './Slider';
//this component maps all products intp cards
const Container = ( { items,no_pages,index_handler,index,...otherprops}) => {
  
  return (
  <View  >
    <Slider  no_pages={no_pages} index_handler={index_handler} index={index}/>
    <View style={styles.container} >
    {items.length>0 && (
    <FlatList
        // ListHeaderComponent={}
        data={items}
        renderItem={({ item }) => (
          <Card  item={item} {...otherprops} />
        )}
        keyExtractor={(item) => item.id}
        
      />
    )}
    </View>
    

  </View>
  )
}

export default Container
const styles = StyleSheet.create({
    container: {
      marginLeft:"15%",
      height:"92%"
      
    },
  });
