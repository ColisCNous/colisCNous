import { ErrorMessage, Field } from "formik"
import { useEffect } from "react"
import { InputGenInterface } from "../interfaces/inputGenInterface"



/**
 * this generic input need to be use with props type InputGenInterface
 * @param InputGenInterface 
 * @returns JSX.Element
 */
export const InputGeneric = ({ name, type, label,textColor,fontWeigth,bgInput,wigthInput, ...rest }: InputGenInterface) => {



    return (
        <div>
            <Field placeholder={label}
                className={`${textColor?textColor:'text-black'} ${fontWeigth?fontWeigth:'font-bold'}
                ${bgInput?bgInput:'placeholder-gray-600'} ${wigthInput&&wigthInput} px-4 py-2.5 mt-2 text-base 
                transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 
                focus:border-blueGray-500 focus:bg-white  focus:outline-none 
                focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400`}
                name={name}
                type={type} {...rest} />

            <div className="font-bold text-red-500 px-5 py-2">
                <ErrorMessage  name={name} />
            </div>
        </div>
    )
}