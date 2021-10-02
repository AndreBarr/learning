const template = document.createElement("template");

template.innerHTML = `<link rel="stylesheet" href="css/employees.css" />
    <div class="employee">
        <h3></h3>
        <p><slot name="bio"/></p>
    </div>`;

class Employee extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("employee-card", Employee);

const employee1 = {
  name: "Edilbert",
  bio: "Call me Edy",
};
const employee2 = {
  name: "Andre",
  jobTitle: "Master of Coin",
};
const employee3 = {
  name: "Esther",
};

const employees = [employee1, employee2, employee3];

const dashboard = document.querySelector(".dashboard");

function displayEmployee(employee) {
  const employeeCard = document.createElement("employee-card");
  employeeCard.setAttribute("name", employee.name);
  employeeCard.shadowRoot.querySelector("h3").innerText = employee.jobTitle
    ? `${employee.name} | ${employee.jobTitle}`
    : employee.name;
  employeeCard.innerHTML = employee.bio
    ? `<div slot="bio">${employee.bio}</div>`
    : "";
  return employeeCard;
}

employees.forEach((employee) => {
  dashboard.appendChild(displayEmployee(employee));
});
