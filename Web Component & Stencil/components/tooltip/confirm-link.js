class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (ev) => {
      if (!confirm("Do you really want to leave?")) {
        ev.preventDefault();
      }
    });
  }
}

customElements.define("sf-confirm-link", ConfirmLink, { extends: "a" });
