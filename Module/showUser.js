



const URL = 'https://randomuser.me/api/';










const getUser = async () => {
    const data = await fetch(URL);
    const response = await data.json();
    const people = response.results[0];
   
    const { title, first, last } = people.name;
    const { email, phone } = people;
    const { large: image } = people.picture;
    const { name: street } = people.location.street;
    const { age } = people.dob;
    const { password } = people.login;

    

    return {
        email,
        phone,
        image,
        street,
        age,
        password,
        name:`${title} ${first} ${last}`
        
    }


}

export default getUser;