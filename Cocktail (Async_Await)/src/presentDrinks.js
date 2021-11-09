import fetchDrink from "./fetchDrinks.js";

import displayDrink from "./displayDrinks.js";
import setDrink from './setDrink.js'

const presentDrink = async (url) => {
    //fetch drinks
    const data = await fetchDrink(url);

    //display drinks

    const section = await displayDrink(data);
   if(section){
       setDrink(section)
   }
}


export default presentDrink;