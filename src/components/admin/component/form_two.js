import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object({
    firstName: Yup
    .string()
    .required()
    .trim(),
    surname: Yup
    .string()
    .required()
    .trim(),
    lastName: Yup
    .string()
    .required()
    .trim(),
    card_type: Yup
    .string()
    .required()
    .trim(),
    nationality: Yup
    .string()
    .required()
    .trim(),
    region: Yup
    .string()
    .required()
    .trim(),
    check_no: Yup
    .string()
    .required()
    .trim(),
    nida_no: Yup
    .string()
    .required()
    .min(16)
    .trim(),
    gender: Yup
    .string()
    .required()
    .trim(),
    dob: Yup
    .string()
    .required()
    .trim(),
    telephone : Yup
    .string()
    .required()
    .trim(),
    email: Yup
    .string()
    .required()
    .email()
    .trim(),
})

export default function FormTwo() {

    const [file, setFile] = useState("");

    const { register, handleSubmit, reset, formState : {errors, isValid, isDirty, isSubmitSuccessful} } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver : yupResolver(schema)
    })
  return (
    <div>
        
    </div>
  )
}
