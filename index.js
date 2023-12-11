let username = document.querySelector("#username");
let Email = document.querySelector("#Email");
let password = document.querySelector("#password");
let ReenterPassword = document.querySelector("#ReenterPassword");
let form = document.querySelector("#form");

function ShowError(input, message){
    const FormControl = input.parentElement
    FormControl.className = "form-control error";
    const small =  FormControl.querySelector("small");
    small.innerHTML = message;
}

function ShowSuccess(input){
    const FormControl = input.parentElement;
    FormControl.className = "form-control succcess";
}

function checkMail (input){
    const RegEx =  /^(?:\d{3}|@\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

    if(RegEx.test(input.value)){
        ShowSuccess(input)
    } else{
        ShowError (input, "Email is not valid");
    }
}


function CheckInputLength(input, min, max){
    if(input.valur<min){
        ShowError(input , `${GetFieldName(input)} You must need to at least ${min} Characters`)
    } else if(input.value>max){
        ShowError(input , `${GetFieldName(input)} You must be less than ${max} Characters`)
    }
    else{
        ShowSuccess(input);
    }
}

function GetFieldName(input){
return input.id.charAT(0) .toUpperCase() + input.id.slice(1);
}

function CheckPassword(input1 , input2){
if (input1.valu != input2.value){
    ShowError(input2 , "Incorrect Password")
}
}

form.addEventListener("submit" , (e)=>{
e.preventDefault();

CheckInputLength(username, 3, 10)
CheckInputLength(password, 6, 30)
checkMail(Email)
CheckPassword(password , ReenterPassword);
})