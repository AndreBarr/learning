import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false;

  @Prop({ reflect: true }) header: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  async open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 123456789</li>
            <li>
              Email: <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop" onClick={() => this.onCloseDrawer()}></div>,
      <aside>
        <header>
          <h1>{this.header}</h1>
          <uc-button onClick={() => this.onCloseDrawer()}>X</uc-button>
        </header>
        <section id="tabs">
          <uc-button borderAnimation class={!this.showContactInfo ? 'active' : ''} onClick={() => this.onContentChange('nav')}>
            Navigation
          </uc-button>
          <uc-button borderAnimation class={this.showContactInfo ? 'active' : ''} onClick={() => this.onContentChange('contact')}>
            Contact
          </uc-button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
