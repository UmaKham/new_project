import {user} from '/modules/user'
import { postData } from '/modules/helpers'

let user_name = document.querySelector('.user_name')
let email_text = document.querySelector('.email_text')

user_name.innerHTML = `${user.name} ${user.surname}`
email_text.innerHTML = user.email

let btns = document.querySelectorAll('button')

let form_add_wallet = document.forms.add_wallet

form_add_wallet.onsubmit = (e) => {
  e.preventDefault();

  let wallet = {}

  let fm = new FormData(form_add_wallet)

  fm.forEach((value, key) => {
    wallet[key] = value
  })

  wallet.email = user.email

  postData('/wallets', wallet)
    .then(res => {
      if(res.status == 200 || res.status == 201) {
        let bg_add_wallet = document.querySelector('.bg_add_wallet')
        bg_add_wallet.style.display = 'none'

      }
    })
}

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
    if(btn.classList == 'add_wallet') {
      let bg_add_wallet = document.querySelector('.bg_add_wallet')
      bg_add_wallet.style.display = 'flex'
    }
    if(btn.classList == 'close_btn') {
      let bg_add_wallet = document.querySelector('.bg_add_wallet')
      bg_add_wallet.style.display = 'none'
    }
  }
})