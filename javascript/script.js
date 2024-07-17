let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



//function to validate name
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s'-]+$/ ;
    return nameRegex.test(name) ;
}

//function to validate phone number
function validateNumber(number) {
    const numRegex = /^\d{10}$/ ;
    return numRegex.test(number) ;
}

//function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Function to validate form
function validateForm(event) {
    event.preventDefault() ;

    // The preventDefault method is used to prevent the default action that belongs to the event. In the context of form submission, the default action is to send the form data to the server and refresh the page. By using preventDefault, you stop this default action, allowing you to handle the form submission with your own custom JavaScript logic instead.
    const name = document.getElementById('name').value ;
    const number = document.getElementById('number').value ;
    const email = document.getElementById('email').value ;
    const date = document.getElementById('date').value ;

    if(!validateName(name)) {
        alert('Invalid Name');
        return
    }
    if(!validateNumber(number)) {
        alert('Invalid phone number') ;
        return
    }
    if(!validateEmail(email))  {
        alert('Invalid Email');
        return
    }
    // Check if date is empty or not
    if (date === '') {
        alert('Please enter a Date');
        return;
    }
    alert('Form submitted successfully!!')
}
// Add event listener to the form
//document.getElementById('myForm').addEventListener('submit',validateForm)