import React,{useState,useEffect} from "react";
import { View } from "react-native";
import fetchData from "./Api";
import Container from "./Components/Container";
import LoadingComponent from "./Components/LoadingComponent";
//you can adjust this global variables
const api="https://dummyjson.com/products"  
const no_items_page=6

export default function MainScreen({navigation}) {

  const [items,setitems]=useState([])            //state that holds items
  const [loading,setloading]=useState(true)      //flag used to trace loading of items
  const [no_pages,setno_pages]=useState(0)       //state used to hold no of pages in main screen
  const [index_page,setindex_page]=useState(0)    //state used to index of page in main screen
  
  const load_data=async(api)=>{                   //loading and sorting data descending from api
    const data=await fetchData(api)
    let pages=data.products.length/no_items_page
    setno_pages(pages)
    const sorted_data=data.products.sort((a,b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() < a.title.toLowerCase()) ? -1 : 0))
    setitems(sorted_data)
    setloading(false)
  }

  const filter_items=(index_filtered)=>{ // callback function to filter hidden product
    setitems((previous_state)=>previous_state.filter((item)=>item.id!==index_filtered))
  }

  const Navigate_item_screen=(item)=>{  // callback function to navigate to item screen
    navigation.navigate("ItemScreen",{ title: item.title ,customProp : item} )
  }
  const handle_index=(state)=>{
    setindex_page(state)
  }
 
  useEffect(()=>{load_data(api)},[]);  //fetching products one time on first rendering
  return (
    <View>
      
      {loading?<LoadingComponent />:<Container no_pages={no_pages} index_handler={handle_index} index={index_page} items={items.slice(index_page*no_items_page,(index_page*no_items_page)+no_items_page)} filter_items={filter_items} Navigate_item_screen={Navigate_item_screen} />
     }
      
    </View>
  );
}
