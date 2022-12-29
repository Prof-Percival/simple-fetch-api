# simple-fetch-api
Implementation of Fetch API
<h1>Simple Fetch API Project</h1>
<p>
This Mini-Project is a demonstration of using an API and dynamically changing the details on the webpage.
<br>
<br>
Initially, the project was making requests every time you click the button.
<br>
I improved the code to make the request only once (When the script loads), and then I store the object in a variable.
<br>
<br>
I make use of <b>Random</b> function from the Math object to generate a number that I can use as a random Id to get the data that can be displayed dynamically. Additionally, I use <b>floor</b> function to round down the generated number to get an integer value.
<br>
<br>
Every time the button is clicked, it generates a random number, and then it is used as an index for the array which has multiple objects. 
<br>
Depending on the index, an object is returned, of which I access only 6 properties of it.
<br>
<ol>
<li>Name</li>
<li>Height</li>
<li>Eye Colour</li>
<li>Species</li>
<li>Gender</li>
<li>Image</li>
</ol>
With the Image, I get a URL which I use it to set the <b>src</b> attribute value dynamically.
<br>
<br>
While the page delays with loading the contents, it will display a default Image, and <b>Loading...</b> for all the elements that displays texts
</p>

<h2 align='center'>DEMO</h2>
<img src="/img/demo.png" alt="Site Demo" style="width: 100%;"/>
