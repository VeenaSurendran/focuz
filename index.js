const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    const name= document.getElementById('name').value
    const email= document.getElementById('email').value
    const contact= document.getElementById('contact').value
    const message= document.getElementById('message').value

    const error = document.getElementById('error')

    if(name=="" || name==null){
        e.preventDefault();
        error.innerHTML= "Requied Field"
    }else{
        error.innerHTML=""
    }

    if(email=="" || email==null){
        e.preventDefault();
        emailerror.innerHTML= "Requied Field"
    }else{
        emailerror.innerHTML=""
    }

    if(contact=="" || contact==null){
        e.preventDefault();
        contacterror.innerHTML= "Requied Field"
    }else{
        contacterror.innerHTML=""
    }

    if(message=="" || message==null){
        e.preventDefault();
        messageerror.innerHTML= "Requied Field"
    }else{
        messageerror.innerHTML=""
    }


})