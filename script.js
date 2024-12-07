const checkBtn=document.querySelector(".check_btn");
const resultMsg=document.querySelector("#result_msg");
const inputValue=document.querySelector("#text_input");

function isPalindrome(){
    const str=inputValue.value;
    const cleanInputValue=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanInputValue.split('').reverse().join('');
    if (cleanInputValue===reversedInput){
        resultMsg.innerText=`${str} is a palindrome.`        
    }else{
        resultMsg.innerText=`${str} is not a palindrome.`
    }
    resultMsg.style.display="block";
};

checkBtn.addEventListener("click", isPalindrome)