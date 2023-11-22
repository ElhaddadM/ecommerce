import axios from "axios";

const configAxios = axios.create([
   {
    baseURL : 'localhost:3002'
   }
])

export default configAxios;