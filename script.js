let passwordBox = document.getElementById("password")
let length = 8
let upperCase="QWERTYUIOPASDFGHJKLZXCVBNM"
let lowerCase="qwertyuiopasdfghjklzxcvbnm"
let number ="1234567890"
let  specialCharacters="@#$%&*+??"
let allChar =  upperCase +lowerCase+number+specialCharacters


function creatPassword(){
    let password = ""
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password = password +  number[Math.floor(Math.random() * number.length)]
    password = password +  specialCharacters[Math.floor(Math.random() * specialCharacters.length)]


    while(length>password.length){
        password = password + allChar[Math.floor(Math.random() * allChar.length)]

    }

    passwordBox.value = password


}

function copyPass(){
    passwordBox.select()
    document.execCommand('copy')
}

