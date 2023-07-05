// 아이디
document.getElementById("inputId").addEventListener("keyup", function(){
    const regExp = /^[a-z]([a-z]|[A-Z]|[0-9]|\-|\_){5,13}$/;

    if(regExp.test(this.value)){
        this.style.backgroundColor = "lightgreen";
        this.style.color = "white";

    } else{
        this.style.backgroundColor = "lightcoral";
        this.style.color = "white";
    }
})

// 비밀번호
document.getElementById("inputPwdConfirm").addEventListener("keyup", function(){
    const inputPwd = document.getElementById("inputPwd");

    if(inputPwd.value.length == 0){
        alert("비밀번호를 입력해주세요.");
        this.value = "";
        inputPwd.focus();
    }
})

document.getElementById("inputPwdConfirm").addEventListener("keyup", function(){
    const inputPwd = document.getElementById("inputPwd");

    if(this.value == inputPwd.value){
        this.style.backgroundColor = "lightgreen";
        this.style.color = "white";

    } else{
        this.style.backgroundColor = "lightcoral";
        this.style.color = "white";
    }

    if(inputPwdConfirm.value.length == 0){
        this.style.backgroundColor = "white";
    }
})

// 이름
document.getElementById("inputName").addEventListener("keyup", function(){
    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test(this.value)){
        this.style.backgroundColor = "lightgreen";
        this.style.color = "white";

    } else{
        this.style.backgroundColor = "lightcoral";
        this.style.color = "white";
    }

    if(this.value.length == 0){
        this.style.backgroundColor = "white";
    }
})

// validate()
function validate(){
    const woman = document.getElementById("woman");
    const man = document.getElementById("man");

    if(!woman.checked && !man.checked){
        alert("성별을 입력해 주세요.");
        return false;
    }

    const inputEmail = document.getElementById("inputEmail");
    if(inputEmail.value.length == 0){
        alert("이메일을 입력해 주세요.");
        return false;
    }
}