const validarEmail = (email : string) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
  }
const validarRA = (RA : Int8Array) => {
    return RA?.toString().length == 13
}
const validarRM = (RM  : Int8Array) => {
    return RM?.toString().length == 5
}

const validarCPF = (CPF : Int8Array) => {
    return CPF?.toString().length == 11
}

export {
    validarEmail,
    validarCPF,
    validarRM,
    validarRA
}