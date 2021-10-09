// Define template here
const template = document.createElement("template");
// Add slot for nav item content
// Add styling for border
template.innerHTML = `
  <li class="nav-item">
    <slot>Default</slot>
    <div class="top"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="bottom"></div>
  </li>
`;

class NavItem extends HTMLElement {
  constructor() {
    super();
    // Add props for border color
  }

  connectedCallback() {
    const temp = document.importNode(template.content, true);
    this.appendChild(temp);
  }

  // Create method to retrieve border colors
}

customElements.define("sf-nav-item", NavItem);
