//CURRENT YEAR:
//To input the current year, first select a variable for where we want to place the date.
const currentYear = document.querySelector("#current-year");

//Then store the date in a variable. I just named the variable date. 
//Then extract the year of the date.
const date = new Date().getFullYear();

//Then change the innerHTML of the initial variable and equal it to what we want it to be using template literals.
currentYear.innerHTML = `${date}`;
//----------------------------------------------------------------------------------------------------------------

//LAST MODIFIED:
//First, sleect a variable for where we want to place lastModified.
const lastModified = document.querySelector("#lastModified");

//Then store the last modified date in a variable using the new Date(document.lastModified);
const modifiedDate = new Date(document.lastModified);

//Then add it to the inner HTML.
lastModified.innerHTML = `Last Modification: ${modifiedDate}`;