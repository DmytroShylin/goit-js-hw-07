document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем перезагрузку страницы
  
      const emailInput = this.elements.email;
      const passwordInput = this.elements.password;
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === '' || password === '') {
        alert('All form fields must be filled in');
      } else {
        const formData = {
          email: email,
          password: password
        };
  
        console.log(formData);
        this.reset(); // Очищаем поля формы
      }
    });
  });
