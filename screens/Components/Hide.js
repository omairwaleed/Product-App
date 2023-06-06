import React from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native'
import IoniMaterialCommunityIconscons from 'react-native-vector-icons/AntDesign'

//component of hide button
 
const Hide = ({filter_items,index}) => {    
  return (
   <TouchableOpacity style={styles.container} onPress={()=>filter_items(index)}>
         <IoniMaterialCommunityIconscons name="closecircleo" size={24} color="#088178"  />
   </TouchableOpacity>
  )
}

export default Hide
const styles = StyleSheet.create({
    container: {
       position:"absolute",
       top:88,
       right:10
        
        
      
    },})