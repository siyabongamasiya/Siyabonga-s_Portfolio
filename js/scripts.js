/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const sendEMail = async() => {
    //read values from elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    //store in object
    const outGoingEmail = {
        name : name,
        email : email,
        phone : phone,
        message : message
    }

    //clean the fields
    document.getElementById("name").value ="";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value ="";

    try {
        //send and await response
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(outGoingEmail),
        });

        //handle response
        await response.json();
        if (response.ok) {
            alert("Email sent...i will get back to you as soon as i receive it!!")
        } else {
            alert("Ooops,email not sent...something went wrong in the server!!")
        }
    } catch (error) {
        alert("Oops,something went wrong...please check your internet connection!!")
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const fields = form.querySelectorAll("input, textarea");
  const responseText = document.getElementById("responseText")

  const checkValidity = () => {
    const allValid = form.checkValidity();
    submitButton.disabled = !allValid;
    responseText.classList.add("d-none");
    // Show red borders / feedback as user types
    fields.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
      } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    });
  };

  fields.forEach(field => field.addEventListener("input", checkValidity));
  
  form.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message')
  };

  // Show spinner and disable button
  const spinner = document.getElementById("spinner");
  const submitText = document.getElementById("submitText");
  submitButton.disabled = true;
  spinner.classList.remove("d-none");
  responseText.classList.add("d-none");
  submitText.textContent = "Sending...";

  //send email
  try {
    const response = await fetch('https://email-sender-xty2.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById('submitSuccessMessage').style.display = 'block';
      document.getElementById('submitErrorMessage').style.display = 'none';
      document.getElementById('contactForm').reset();
    } else {
      throw new Error(result.message || 'Unknown error');
    }
    

  } catch (error) {
    document.getElementById('submitErrorMessage').style.display = 'block';
    document.getElementById('submitSuccessMessage').style.display = 'none';
  }

  // Hide spinner and re-enable button
  spinner.classList.add("d-none");
  responseText.classList.remove("d-none");
  submitText.textContent = "Submit";
  submitButton.disabled = true;
  });

  submitButton.disabled = true
  responseText.classList.add("d-none");
});