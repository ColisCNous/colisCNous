import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';

export const useAxiosCenter=()=>{
    const {tokenReducer}=useSelector((state:RootState)=>state)

    return {}
}