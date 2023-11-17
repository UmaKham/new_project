let form_signIn = document.querySelector('.signIn')
let form_signUp = document.querySelector('.signUp')

let signUp_btn = document.querySelectorAll('button')

signUp_btn.forEach(btn => {
  if(btn.classList == 'signUp_btn') {
    btn.onclick = (e) => {
      e.preventDefault();
    
      form_signIn.style.display = 'none'
      form_signUp.style.display = 'flex'
    }
  }
  if(btn.classList == 'cancel') {
    btn.onclick = (e) => {
      e.preventDefault();
      form_signIn.style.display = 'flex'
      form_signUp.style.display = 'none'
    }
  }

})