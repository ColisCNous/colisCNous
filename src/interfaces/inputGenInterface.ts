import { string } from "yup";


export interface InputGenInterface {
    name:string
    type?:string
    label:string
    textColor?:string
    fontWeigth?:string
    bgInput?:string
    wigthInput?:string
    rows?:string
    handleChange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
}