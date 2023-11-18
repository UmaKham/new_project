import {user} from './modules/user'

let user_name = document.querySelector('.user_name')
let email_text = document.querySelector('.email_text')

user_name.innerHTML = `${user.name} ${user.surname}`
email_text.innerHTML = user.email

let btns = document.querySelectorAll('button')

btns.forEach(btn => {
  btn.onclick = (e) => {
    if(btn.classList == 'log_out') {
      e.preventDefault();
      
      let black_bg = document.querySelector('.black_bg')
      black_bg.style.display = 'flex'
    }
    if(btn.classList == 'no') {
      e.preventDefault();
      
      let black_bg = document.querySelector('.black_bg')
      black_bg.style.display = 'none'
    }
    if(btn.classList == 'yes') {
      e.preventDefault();

      localStorage.removeItem('user')
      location.assign('/pages/signIn')
    }
  }
})