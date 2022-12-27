const button = document.getElementById('getCharacter');
    
button.addEventListener('click', (e) =>{
        e.preventDefault();

        //Variables for elements that will be dynamically updated
        const name = document.getElementById('name');
        const height = document.getElementById('height');
        const eyeColor = document.getElementById('eye-color');
        const birthYear = document.getElementById('birth-year');
        const gender = document.getElementById('gender');

        //Display Loading... on the ELements Content
        name.innerHTML = "<em>Loading...</em>";
        height.innerHTML = "<em>Loading...</em>";
        eyeColor.innerHTML = "<em>Loading...</em>";
        birthYear.innerHTML = "<em>Loading...</em>";
        gender.innerHTML = "<em>Loading...</em>";

        //Variable for holder random number to be used as id for Fetch API
        const randomId = Math.ceil(Math.random() * 83);

        fetch(`https://swapi.dev/api/people/${randomId}`)
        .then(response => response.json())
        .then(character => {
            //Changing Inner HTMLs of Elements
            name.innerHTML = character['name'];
            height.innerHTML = character['height'];
            eyeColor.innerHTML = character['eye_color'];
            birthYear.innerHTML = character['birth_year'];
            gender.innerHTML = character['gender'];
        });
        
    });