import get from "../Module/getElement.js";
import getUser from "../Module/showUser.js";
import diplayUser from "../Module/displayUser.js";


const RandomBtn = get('.btn');


const showUser = async () => {
    const fetchUser = await getUser();
  
  diplayUser(fetchUser)
}




window.addEventListener('DOMContentLoaded', showUser);

RandomBtn.addEventListener('click', showUser)


