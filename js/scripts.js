
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const fields = form?.querySelectorAll("input, textarea");
  const responseText = document.getElementById("responseText");

  const checkValidity = () => {
    const allValid = form?.checkValidity();
    submitButton.disabled = !allValid;
    responseText?.classList.add("d-none");

    fields?.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
      } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    });
  };

  fields?.forEach(field => field.addEventListener("input", checkValidity));

  form?.addEventListener("submit", async (e) => {
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
    spinner?.classList.remove("d-none");
    responseText?.classList.add("d-none");
    submitText.textContent = "Sending...";

    try {
      const result = await emailjs.send(
        "service_hw57qkd",       // your EmailJS Service ID
        "template_057amt8",      // your EmailJS Template ID
        data,                    // data object
        "fbtS_KCttb0AT5T-U"     // your EmailJS Public Key
      );

      console.log("EmailJS result:", result);

      // Show success message
      document.getElementById('submitSuccessMessage').style.display = 'block';
      document.getElementById('submitErrorMessage').style.display = 'none';
      form.reset();

    } catch (error) {
      console.error("EmailJS error:", error);

      // Show error message
      document.getElementById('submitErrorMessage').style.display = 'block';
      document.getElementById('submitSuccessMessage').style.display = 'none';
    }

    // Hide spinner and re-enable button
    spinner?.classList.add("d-none");
    responseText?.classList.remove("d-none");
    submitText.textContent = "Submit";
    submitButton.disabled = true;
  });

  submitButton ? submitButton.disabled = true : "";
  responseText?.classList.add("d-none");
});
