import axios from "axios";

export const userLoginService = async (body) =>{
    console.log('Recieved:',body);

// this post response for Login

    let res =  await axios.post("http://localhost:8080/user/login",body);
    console.log(res);

    return res;

}