import { ActionToken } from "../reducers/tokenReducer"


export const tokenAction=(token:string):ActionToken=>{
    return {
        type:"ADD_TOKEN",
        token:token
    }
}