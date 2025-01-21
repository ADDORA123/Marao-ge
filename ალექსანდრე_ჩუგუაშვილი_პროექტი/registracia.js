function alexa (){
    let email = document.getElementById('email').value;
    let errorDiv = document.getElementById('error-div');
    let regex = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;

    if(!regex.test(email)) {
        errorDiv.style.display = 'block';
        valid = false;
    }
    else {
        errorDiv.style.display = 'none';
    }
}