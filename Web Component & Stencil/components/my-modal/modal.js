const template = document.createElement("template");
// On first load modal content transitions, issue is with linking the style sheet
// instead of having the css in the template directly
template.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <div id="backdrop"></div>
  <div id="modal-content">
    <header>
      <slot name="title">Default Header</slot>
    </header>
    <div id="content">
      <slot name="content">Default</slot>
    </div>
    <div id="footer">
      <button id="close-btn">Close</button>
    </div>
  </div>
`;

class Modal extends HTMLElement {
  constructor() {
    super();
    this._header = "Dummy header";
    this._content = "Dummy content";
    this.isOpen = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector("#footer")
      .querySelector("#close-btn")
      .addEventListener("click", this.close.bind(this));
    this.shadowRoot
      .querySelector("#backdrop")
      .addEventListener("click", this.close.bind(this));
  }

  connectedCallback() {
    if (this.hasAttribute("opened")) {
      this.open();
    }
  }

  open() {
    this.setAttribute("opened", "");
    this.isOpen = true;
  }

  close() {
    this.removeAttribute("opened");
    this.isOpen = false;
  }
}

customElements.define("sf-modal", Modal);
