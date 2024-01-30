import React from 'react'
import TextFieldInput from "@mui/material/TextField"
import { FormikProps } from 'formik';


type Props = {
    label: string;
    dir?: "ltr" | "rtl";
    type?: string;
    formik: FormikProps<any>,
    name: string
}
const TextField = ({ label, dir = "rtl", type, formik, name }: Props) => {
    return (
        <TextFieldInput
            fullWidth
            error={formik?.touched[name] && Boolean(formik?.errors[name]) ? true : false}
            // @ts-ignore
            helperText={<span className='text-red-500'>{formik?.touched[name] && formik?.errors[name!]}</span>}
            value={formik.values[name]}
            onChange={formik.handleChange}
            name={name}
            autoComplete="off"
            type={type} dir={dir}
            label={label}
            variant="outlined"
            color='warning'
        
        />
    )
}

export default TextField