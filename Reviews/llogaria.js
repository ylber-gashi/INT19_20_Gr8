(function() {
    
    var email = sessionStorage.getItem('email');
    if (email != null && email.length) {
        document.getElementById('user-email').text = email;
        document.getElementById('user-email').style.display = 'block';
        document.getElementById('signout-button').style.display = 'block';
        
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('signup-button').style.display = 'none';
    }

 })();