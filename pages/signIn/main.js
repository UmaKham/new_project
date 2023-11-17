import axios from 'axios'

let form_signIn = document.forms.signIn
let form_signUp = document.forms.signUp

let btns = document.querySelectorAll('button')

btns.forEach(btn => {

  if(btn.classList == 'signUp_btn') {
    btn.onclick = (e) => {
      e.preventDefault();
    
      form_signIn.style.display = 'none'
      form_signUp.style.display = 'flex'
    }
  }

  if(btn.classList == 'cancel_btn') {
    btn.onclick = (e) => {
      e.preventDefault();
      form_signIn.style.display = 'flex'
      form_signUp.style.display = 'none'
    }
  }

  if(btn.classList == 'reg_btn') {
    btn.onclick = (e) => {
      e.preventDefault();

      let form = document.forms.signUp

      let user = {}

      let fm = new FormData(form)

      fm.forEach((value, key) => {
        user[key] = value
      })

      axios.get('http://localhost:8080/users?email=' + user.email)
        .then(res => {
          if(res.status !== 200 && res.status !== 201) return
          if(res.data.length > 0) {
            console.log('Account already taken');
            return
          }
          axios.post('http://localhost:8080/users', user)
            .then(res => {
              if(res.status == 200 || res.status == 201) {
                
                form_signIn_btn.style.display = 'flex'
                form_signUp_btn.style.display = 'none'
              }
            })
        })
    }
  }

  if(btn.classList == 'signIn_btn') {
    btn.onclick = (e) => {
      e.preventDefault();

      let form = document.forms.signIn

      let error_text = document.querySelector('.error_text')
      let error_mod = document.querySelector('.error_block')

      let user = {}

      let fm = new FormData(form)

      fm.forEach((value, key) => {
        user[key] = value
      })

      axios.get('http://localhost:8080/users?email=' + user.email)
        .then(res => {
          if(res.status !== 200 && res.status !== 201) return
          if(res.data.length === 0) {
            error_text.innerHTML = 'User not found'
            error_mod.style.display = 'flex'

            return
          }

          let [res_user] = res.data

          if(res_user.password == user.password) {
            location.assign('/')
          } else {
            error_text.innerHTML = 'invalid password'
            error_mod.style.display = 'flex'
          }
        })
    }
  }

  if(btn.classList == 'error_btn') {
    btn.onclick = (e) => {
      e.preventDefault();
      
      let error_mod = document.querySelector('.error_block')
  
      error_mod.style.display = 'none'
    }
  }
})