const button = document.getElementById('getCharacter');
    
button.addEventListener('click', (e) =>{
        e.preventDefault();

        //Variables for elements that will be dynamically updated
        const name = document.getElementById('name');
        const height = document.getElementById('height');
        const eyeColor = document.getElementById('eye-color');
        const birthYear = document.getElementById('birth-year');
        const gender = document.getElementById('gender');

        //Variable for holder random number to be used as id for Fetch API
        const randomId = Math.ceil(Math.random() * 83);
        
    });