class ToggleBtn extends HTMLElement {
  constructor() {
    super();
    this.isVisible = true;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            #info-box {
            display: none;
            }
        </style>
        <button>Show</button>
        <p id="info-box"><slot>Default</slot><p>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute("is-visible")) {
      this.isVisible =
        this.getAttribute("is-visible").toLowerCase() === "false"
          ? false
          : true;
      this.toggleInfo(this.isVisible);
    }

    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.toggleInfo(this.isVisible));
  }

  toggleInfo(isVisible) {
    const button = this.shadowRoot.querySelector("button");
    const infoEl = this.shadowRoot.querySelector("#info-box");

    if (isVisible) {
      infoEl.style.display = "block";
      button.textContent = "Hide";
      this.isVisible = false;
    } else {
      infoEl.style.display = "none";
      button.textContent = "Show";
      this.isVisible = true;
    }
  }
}

customElements.define("sf-toggle-btn", ToggleBtn);
