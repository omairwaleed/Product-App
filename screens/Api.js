//this funcion is used to fetch products from Api
const fetchData = async(baseURL) => {
    try{
        const response= await fetch(baseURL)
        const json=await response.json()
        return json
    }
    catch(error){
        console.error(error);
    }
  };

export default fetchData
