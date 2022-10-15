import axios from "axios";
  
export const getUserData = () => {
    return axios.get('https://randomuser.me/api/')
  }

export const findUser = (name) => {
    return axios.get(' https://api.agify.io/?name=' + name)
}

 