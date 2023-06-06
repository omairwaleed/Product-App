import React from 'react'
import { View ,Text,StyleSheet,TouchableOpacity} from 'react-native'
//This Component contain number slider in the top that navigates between pages
const Slider = ({no_pages,index,index_handler}) => {
  
  const generateSlider =()=>{
        const items = [];
        for (let indexin = 0; indexin <no_pages; indexin++) {
            items.push( <TouchableOpacity onPress={()=>{index_handler(indexin)}} key={indexin} style={indexin==index?styles.picker:styles.picker_no}><Text style={{color:"black"}}>{indexin+1}</Text></TouchableOpacity>)      
        }
        return items
    }
  return (
  <View style={styles.container}>
    {generateSlider()}
  </View>
    
  )
}

export default Slider
const styles = StyleSheet.create({
    container: {
      paddingBottom:12,
      paddingTop:5,
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#f1f9ff",
      
    },
    picker:{
        backgroundColor: '#489503',
        paddingHorizontal: 5,
        borderRadius: 25,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        elevation: 3,
        alignSelf: 'center',
        marginRight:10
    },
    picker_no:{
        backgroundColor: '#dadcee',
        paddingHorizontal: 5,
        borderRadius: 25,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        elevation: 3,
        alignSelf: 'center',
        marginRight:10
    }
  });