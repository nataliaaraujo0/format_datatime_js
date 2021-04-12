
//2 - preencha algo do lado esquerdo do valor
function leftPad(value, count = 2, char = '0'){
    //4 - criar const para converter ints para string
    const stringValue = value.toString();
    let newValue = stringValue;
    // 3 - condicao para colcoar zero  esqueda 
    if (stringValue.length < count) {
        for (let i = 0; i < count - stringValue.length; i++) {
            newValue = char + stringValue;
        }
    }
     return newValue;
}


//1 - function pegar data hora
function getNemTimestamp() { 
    const now = new Date();
    let result = '';

    //formatar data hora
    result += leftPad(now.getDate());
        result += '/';
    result += leftPad(now.getMonth() +1);
        result += '/';
    result += now.getFullYear();
        result += ' ';
    result += leftPad(now.getHours());
        result += ':';
    result += leftPad(now.getMinutes());
        result += ':';
    result += leftPad(now.getSeconds());
        result += '.';
    result += leftPad(now.getMilliseconds(), 3);


    return result;
}