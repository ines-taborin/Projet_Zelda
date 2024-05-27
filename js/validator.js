const handleSubmit = (event) => {
    event.preventDefault(); 
  
    
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Champ individuellement
    let isValid = true;
  
    // Champ Pseudo (first_name)
    if (firstName === "") {
      isValid = false;
      displayErrorMessage("first_name", "Veuillez saisir votre pseudo.");
    } else {
      clearErrorMessage("first_name");
    }
  
    // Champ Titre (last_name)
    if (lastName === "") {
      isValid = false;
      displayErrorMessage("last_name", "Veuillez saisir un titre.");
    } else {
      clearErrorMessage("last_name");
    }
  
    // Champ Adresse (email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      displayErrorMessage("email", "Veuillez saisir une adresse email valide.");
    } else {
      clearErrorMessage("email");
    }
  
    // Champ Message (message)
    if (message === "") {
      isValid = false;
      displayErrorMessage("message", "Veuillez saisir un message.");
    } else {
      clearErrorMessage("message");
    }
  
    // Si ok envoyer le formulaire
    if (isValid) {
      // Envoyer le formulaire ici
      console.log("C'est okay");
    }
  };
  
  const displayErrorMessage = (fieldName, message) => {
    const errorMessageElement = document.querySelector(`#form [name='${fieldName}'] + .errorMessage`);
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = "block";
  };
  
  const clearErrorMessage = (fieldName) => {
    const errorMessageElement = document.querySelector(`#form [name='${fieldName}'] + .errorMessage`);
    errorMessageElement.textContent = "";
    errorMessageElement.style.display = "none";
  };