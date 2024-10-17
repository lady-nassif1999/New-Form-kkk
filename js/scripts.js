// /*!
// * Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
// * Copyright 2013-2023 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
// */
// // Highlights current date on contact page
// window.addEventListener('DOMContentLoaded', event => {
//     const listHoursArray = document.body.querySelectorAll('.list-hours li');
//     listHoursArray[new Date().getDay()].classList.add(('today'));
// })
// /*!
// * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
// * Copyright 2013-2023 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
// */
// //
// // Scripts
// // 

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted successfully!');
// });
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     const username = document.getElementById('name').value;
//     const password = document.getElementById('password').value;

//     // Process form data (e.g., send it to a server)
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Optionally, you can send the data to a server using fetch or XMLHttpRequest
//     // Example using fetch:
//     fetch('ladynassif68@gmail.com', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username: username, password: password })
//     })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));
// });

// document.getElementById('creative-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted successfully!');
// });
// // Retrieve the value from the text field
// var username = document.getElementById("name").value;

// You can now use the 'username' variable to refer to the entered username

function SendMail(){
   ( function(){
    emailjs.init("HJjkcqwV6DIGjSQuH");})();

    var params ={
        sendername : document.querySelector("#sendername").value,
        to : document.querySelector("#to").value,
        message : document.querySelector("#message").value,
    };
    var serviceID="service_94b1hlb";
    var templetID="template_jzu2z1u";
    

    emailjs.send(serviceID,templetID,params).
    then( res => {
        alert("email sent successfuly")
    })
    .catch();
    }
    
