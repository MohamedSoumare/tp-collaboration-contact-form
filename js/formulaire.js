function verifierFormulaire() {
  
    // preventDefault()
     // Récupérer les valeurs des champs
     let nom = document.getElementById('name').value;
     let email = document.getElementById('email').value;
     let objet = document.getElementById('objet').value;
     let message = document.getElementById('message').value;
   
     // Vérifier si les champs sont vides
     if (nom === '' || email === '' || objet === '' || message === '') {
       alert('Veuillez remplir l\'ensemble des champs.');
       return false; // Empêcher la soumission du formulaire
     } else {
       // Afficher les valeurs dans la console
       console.log('Nom complet : ' + nom);
       console.log('Adresse e-mail : ' + email);
       console.log('Objet du message : ' + objet);
       console.log('Message : ' + message);
   
       // Ajouter une petite pause avant de soumettre le formulaire
       setTimeout(() => {
         document.getElementById('monFormulaire').submit();
       }, 10000); // 10000 millisecondes de pause
   
       return false; // Empêcher la soumission du formulaire
     }
   }