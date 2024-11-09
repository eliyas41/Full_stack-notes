// Question 1.1: Select the element with an id of "sample1"
const sample1Element = document.getElementById("sample1");
// console.log(document);

// // Question 1.2: Print the element itself on the console upon page refresh
console.log(sample1Element);

// // Question 1.3: Print the content of the element on the console upon page refresh
console.log(sample1Element.textContent);

// // 2.1 Select the element with an ID of "techCompanies" using getElementById and display it on the console
// const techCompanies = document.getElementById("techCompanies");
// console.log(techCompanies);

// // 2.2 Use querySelector to select the element with an ID of "techCompanies" and display it on the console
// const techCompaniesQuery = document.querySelector("#techCompanies");
// console.log(techCompaniesQuery);

// // 2.3 Count the total number of li elements under the "techCompanies" ul using querySelectorAll
// const companyListItems = document.querySelectorAll("#techCompanies li");
// console.log("Total tech companies:", companyListItems.length);

// // 2.4 Select all elements with a class name of "red" and display them on the console
// // Using querySelectorAll
// const redCompaniesQuery = document.querySelectorAll(".red");
// console.log("Red companies (querySelectorAll):", redCompaniesQuery);

// // Using getElementsByClassName
// const redCompaniesClass = document.getElementsByClassName("red");
// console.log("Red companies (getElementsByClassName):", redCompaniesClass);

// // 2.5 Create a new li element with a content of "Facebook" and display it on the console
// const newCompany = document.createElement("li");
// newCompany.textContent = "Facebook";
// console.log("Newly created element:", newCompany);

// // 2.6 Give the newly created element a class of "blue" using JavaScript
// newCompany.classList.add("blue");

// // 2.7 Append the newly created element next to the "Sony" li element
// const sonyCompany = techCompanies.querySelector("li:last-child");
// sonyCompany.insertAdjacentElement("afterend", newCompany);

// // 2.8 Count how many of the tech companies are labeled blue and display the result inside the "blueCompanies" div
// const blueCompanies = document.querySelectorAll("#techCompanies .blue");
// const blueCompaniesDiv = document.getElementById("blueCompanies");
// blueCompaniesDiv.innerHTML += `<p>Total blue companies: ${blueCompanies.length}</p>`;

