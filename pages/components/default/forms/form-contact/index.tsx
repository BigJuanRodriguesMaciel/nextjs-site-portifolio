import { Button, Grid } from '@mui/material';
import { useState } from 'react'
import { Textbox } from 'react-inputs-validation';
import { inputEmailValidator, min } from '../../../../../helpers/functions/validators';
import { inputsForm } from '../../emuns/inputsContact';
import Gap from '../../gap';

type Props = {}

export default function FormContact({}: Props) {
    const [inputName, setInputName] = useState({value:"", valid: false})
    const [inputEmail, setInputEmail] = useState({value:"", valid: false})
    const [inputSubject, setInputSubject] = useState({value:"", valid: false})
    const [inputMessage, setInputMessage] = useState({value:"", valid: false})

    // const [validateInputName, setValidateInputName] = useState(false)
    // const [validateInputEmail, setValidateInputEmail] = useState(false)
    // const [validateInputSubject, setValidateInputSubject] = useState(false)
    // const [validateInputMessage, setValidateInputMessage] = useState(false)
    
    const setVariable = (index, value) => {
        index == 0 ? setInputName({
            value,
            valid: min(value)
        }) :
        index == 1 ? setInputEmail({
            value,
            valid: inputEmailValidator(inputEmail).status
        }) :
        index == 2 ? setInputSubject({
            value,
            valid: min(value)
        }) :
        setInputMessage({
            value,
            valid: min(value)
        })
        
    }

    const validateForm = (e) => {
        e.preventDefault()
        console.log(inputName.valid, inputEmail.valid, inputSubject.valid, inputMessage.valid)
        if (inputName.valid && inputEmail.valid && inputSubject.valid && inputMessage.valid) {
            alert('All validated!');
        }
    }

    const getCustomValidation = (type, index) => {
        if(type == 'email'){
            const res = inputEmailValidator(inputEmail.value)
            setInputEmail({...inputEmail, valid: res.status})
            console.log(`>>>>`, inputEmail, res)
            return res.errorText
        }else{
            if (index == 0){
                setInputName({value: inputName.value, valid: min(inputName.value)}) 
                return inputName.valid ? '' : 'Este campo deve conter pelo menos x caracteres'
            }
            
            else if (index == 1){
                setInputEmail({value: inputEmail.value, valid: min(inputEmail.value)}) 
                return inputEmail.valid ? '' : 'Este campo deve conter pelo menos x caracteres'
            }

            else if (index == 2){
                setInputSubject({value: inputSubject.value, valid: min(inputSubject.value)}) 
                return inputSubject.valid ? '' : 'Este campo deve conter pelo menos x caracteres'
            }
            
            else{
                setInputSubject({value: inputMessage.value, valid: min(inputMessage.value)})
                return inputMessage.valid ? '' : 'Este campo deve conter pelo menos x caracteres'
            }
        }
    }
    
    return (
        <div style={{marginTop: 15}}>
            <form onSubmit={validateForm}>
                <Gap bgColor="rgba(255, 255, 255, 0.08)">
                    <Grid container spacing={2}>
                        <>
                            {
                                inputsForm.map((item, index) => {
                                    return(
                                        <Grid item md={index < 2 ? 6 : 12} key={index}>
                                            <div style={{width: index == 0 ? '99%' : '100%'}}>
                                                <label className="f-size-12" htmlFor={`input_${item.name}`}>{item.name}</label>
                                                <Textbox
                                                    attributesInput={{ // Optional.
                                                        id: `input_${item.name}`,
                                                        name: item.name,
                                                        type: item.type,
                                                        placeholder: item.placeholder,
                                                    }}
                                                    value={
                                                        index == 0 ? inputName.value :
                                                        index == 1 ? inputEmail.value :
                                                        index == 2 ? inputSubject.value :
                                                        inputMessage.value
                                                    }
                                                    validationCallback={res =>
                                                        console.log(`>>>>`, res)
                                                      } //
                                                    // value={'name'} // Optional.[String].Default: "".
                                                    onChange={(name, e) => {
                                                        const etarget = (e.target as HTMLInputElement).value
                                                        setVariable(index, etarget)
                                                    }} // Required.[Func].Default: () => {}. Will return the value.
                                                    onBlur={(e) => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                                    validationOption={{
                                                        name: item.name, // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                                        customFunc: () => getCustomValidation(item.type, index),
                                                        msgOnError:`Insira um valor válido para o campo "${item.name}"`,
                                                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                                        required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                            <div className="d-flex j-c-c-center" style={{padding:"20px 0", width: "100%"}}>
                                <Button type="submit" className="button-with-bg">Send Message</Button>
                            </div>
                        </>
                    </Grid>
                </Gap>
            </form>
        </div>
    )
}