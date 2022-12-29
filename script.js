const fetchResult =         //API from STARWARS
fetch(`https://akabab.github.io/starwars-api/api/all.json`)
.then(response => response.json());

const button = document.getElementById('getCharacter');
    
button.addEventListener('click', (e) =>{
        e.preventDefault();

        //Variables for elements that will be dynamically updated
        const name = document.getElementById('name');
        const height = document.getElementById('height');
        const eyeColor = document.getElementById('eye-color');
        const species = document.getElementById('species');
        const gender = document.getElementById('gender');
        const image = document.querySelector('#character-image');

        //Display Loading... on the ELements Content
        name.innerHTML = "<em>Loading...</em>";
        height.innerHTML = "<em>Loading...</em>";
        eyeColor.innerHTML = "<em>Loading...</em>";
        species.innerHTML = "<em>Loading...</em>";
        gender.innerHTML = "<em>Loading...</em>";
        image.src = '/img/fetch-api.jpeg';

        //Variable for holder random number to be used as id for Fetch API (1 t0 83)
        /*
        const randomId = Math.ceil(Math.random() * 83);

        //API from SWAPI.dev
        fetch(`https://swapi.dev/api/people/${randomId}`)
        .then(response => response.json())
        .then(character => {
            //Changing Inner HTMLs of Elements
            name.innerHTML = character['name'];
            height.innerHTML = character['height'];
            eyeColor.innerHTML = character['eye_color'];
            birthYear.innerHTML = character['birth_year'];
            gender.innerHTML = character['gender'];
        });*/

        //Variable for holder random number to be used as id for Fetch API (0 to 88)
        //Skip ID: 17 (Not Present in the API Object) or Limit Length to 87
        const randomId = Math.floor(Math.random() * 88); ///(0 to 87)

        fetchResult.then((allCharacters) => {
            //Retrieve only one character in the list based on the randomly generated number
            const character = allCharacters[randomId];
            
            //Change Image
            image.src = character['image'];

            //Changing Inner HTMLs of Elements
            name.innerHTML = character['name'];
            height.innerHTML = character['height'];
            eyeColor.innerHTML = character['eyeColor'];
            species.innerHTML = character['species'];
            gender.innerHTML = character['gender'];
            
        });
        
    });