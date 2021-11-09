
import { showLoading } from "./toggleLoading.js";

const fetchDrink = async (url) => {
    try {
        showLoading();
        const data = await fetch(url);
        const response = await data.json();
        return response;
    } catch (error) {
        console.log(error);
    }

}


export default fetchDrink;