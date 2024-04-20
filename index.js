let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let h1t = document.querySelector('.h1t');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signinbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0'
    h1t.innerHTML = 'Sign In';
    text.innerHTML = ' Forgot Password';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translatex(35px)';
})
signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px'
    h1t.innerHTML = 'Sign Up';
    text.innerHTML = ' Password Suggestion';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform = 'translatex(0)';
})