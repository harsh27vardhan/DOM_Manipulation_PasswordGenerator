const number = document.querySelector("#length");
const submit = document.querySelector("#submit");
const container = document.querySelector(".container");
const ans_cont = document.querySelector(".ans_cont");

// const passwordLength = Number(number.value);

const passString = "qwertyuioplkjhgfdsazxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";

submit.addEventListener("click",(e)=>{
    container.style.visibility = "visible";
    e.preventDefault();
    const passwordLength = Number(number.value);
    let ans = "";
    if(passwordLength==0 || isNaN(passwordLength)){
        for(let i=0;i<7;i++){
            ans = ans+(passString[Math.floor(Math.random()*62)]);
        }
    }
    else{
        for(let i=0;i<passwordLength;i++){
            ans = ans+(passString[Math.floor(Math.random()*62)]);
        }
    }
    console.log(ans);
    ans_cont.textContent = ans;
    // console.log(passwordLength);
})