import { string } from "yup";


type optionValues ={value:string}

export interface InputGenInterface {
    name:string
    type?:string
    label:string
    textColor?:string
    fontWeigth?:string
    bgInput?:string
    wigthInput?:string
    rows?:string
    optionsValues?:optionValues[]
    handlechange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}