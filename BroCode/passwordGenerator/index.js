function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols){
    const lowerCaseChar = "abcdefghijklmñnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMÑNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!#$%&/?¡¿-+/*";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowerCaseChar : "";
    allowedChar += includeUppercase ? upperCaseChar : "";
    allowedChar += includeNumber ? numberChar : "";
    allowedChar += includeSymbols ? symbolChar : "";

    if(length <= 0){
        return "Password length must be at least 1";
    }
    if(allowedChar.length === 0){
        return "At least one set of characters need to be selected";
    }

    for(let i = 0; i<length; i++){
        const randomIndex =Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbols);

console.log(password);