const inputEmailValidator = inputValue => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(String(inputValue).toLowerCase())) return {status: true}
    else return {status: false, errorText: 'Insira um e-mail válido'}
}

const min = (inputValue, min = 5) => {
    return inputValue.length >= min ? true : false 
}

export { inputEmailValidator, min }