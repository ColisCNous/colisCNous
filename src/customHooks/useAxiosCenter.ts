import axios from 'axios';
import { useSelector } from 'react-redux';
import { urlconfig } from '../config/urlConfig';
import { RootState } from '../reducers/rootReducer';

export const useAxiosCenter=()=>{
    // const {tokenReducer}=useSelector((state:RootState)=>state)

    // const tok:string=tokenReducer.token

    const getAdress =async ()=>{
        return await axios.get(urlconfig.requestUrl)
    }


    
    return {
        getAdress
    }
}