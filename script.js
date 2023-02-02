const form = document.querySelector('form')
const err = document.getElementById('error')

form.addEventListener('submit',function(e){
    e.preventDefault()

    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(fname == '' && lname == '' & email == '' && password == ""){
        err.textContent = "Please Fill In Your Data"
        err.classList.add('alert')
        err.classList.add('alert-danger')
        err.classList.add('my-3')
    }else if(fname == ''){
        err.textContent = "First name is empty"
        err.classList.add('alert')
        err.classList.add('alert-danger')
        err.classList.add('my-3')
    }else if(lname == ''){
        err.textContent = "last name is empty"
        err.classList.add('alert')
        err.classList.add('alert-danger')
        err.classList.add('my-3')
    }else if(email == ''){
        err.textContent = "Email is empty"
        err.classList.add('alert')
        err.classList.add('alert-danger')
        err.classList.add('my-3')
    }else if(password == ''|| password.length < 8){
        err.textContent = "Invalid password"
        err.classList.add('alert')
        err.classList.add('alert-danger')
        err.classList.add('my-3')
    }else{
        err.textContent = "User created"
        err.classList.add('alert')
        err.classList.add('alert-success')
        err.classList.add('my-3')

        location.href = '/home.html'
    }
})