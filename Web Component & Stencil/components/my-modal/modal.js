const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <div class="modal-content">
    <h1><slot>Default Header</slot></h1>
    <p><slot name="content">Default</slot></p>
  </div>
`;

class Modal extends HTMLElement {
  constructor() {
    super();
    this._header = "Dummy header";
    this._content = "Dummy content";
    this._isVisbile = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.addEventListener("click", (ev) => {
      console.log(ev.target);
    });
  }

  connectedCallback() {
    if (this.hasAttribute("isVisible")) {
      this._isVisbile = true;
    }
    this._render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "is-visible") {
      this._isVisbile = newValue !== null ? true : false;
    }

    this._render();
  }

  static get observedAttributes() {
    return ["is-visible"];
  }

  _render() {
    let modalContent = this.shadowRoot.querySelector(".modal-content");
    if (this._isVisbile) {
      this.parentElement.style.background = "rgba(0, 0, 0, 0.5)";
      modalContent.style.display = "block";
    } else {
      this.parentElement.style.background = "white";
      modalContent.style.display = "none";
    }
  }
}

customElements.define("sf-modal", Modal);
