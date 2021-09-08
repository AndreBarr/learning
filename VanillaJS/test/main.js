// const row = document.querySelector(".row");

// for (let i = 1; i <= 20; i++) {
//   const btn = document.createElement("button");
//   btn.innerText = i;
//   btn.addEventListener("click", (e) => {
//     alert(i);
//   });
//   row.appendChild(btn);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

// document.querySelector("div").addEventListener("click", (e) => {
//   console.log(e.target.getAttribute("name"));
// });

//////////////////////////////////////////////////////////////////////////////////////////////////

// class Employee {
//   constructor(person) {
//     this.firstName = person.firstName;
//     this.lastName = person.lastName;
//     this.jobTitle = person.jobTitle;
//     this.bio = person.bio;
//     this.avatar = person.avatar;
//   }
// }

// function createCard(employee) {
//   const html = `<div class="card">
//     <h4>${employee.firstName} ${employee.lastName}
//     ${employee.jobTitle ? `| ${employee.jobTitle}` : ""}</h4>
//     ${employee.avatar ? `${employee.avatar}<br>` : ""}
//     ${employee.bio}
//   </div>`;

//   console.log(html);
//   return html;
// }

// function displayCards(employees) {
//   const cards = employees.map((employee) => createCard(employee)).join("");
//   console.log(employees);
//   const html = `<div class="cards">
//     ${cards}
//   </div>`;

//   document.querySelector(".dashboard").innerHTML = html;
// }

// const testEmployeeOne = new Employee({
//   firstName: "John",
//   lastName: "Doe",
//   bio: "I am John Doe",
// });

// const testEmployeeTwo = new Employee({
//   firstName: "Jane",
//   lastName: "Doe",
//   jobTitle: "Master of Coin",
//   bio: "I am Jane Doe",
// });

// const testEmployeeThree = new Employee({
//   firstName: "Jimmy",
//   lastName: "Joe",
//   jobTitle: "Master of None",
//   bio: "I am Jimmy Joe",
//   avatar: "An Avatar Image",
// });

// const testEmployees = [testEmployeeOne, testEmployeeTwo, testEmployeeThree];

// displayCards(testEmployees);

//////////////////////////////////////////////////////////////////////////////////////////////////
