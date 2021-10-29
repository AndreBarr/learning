import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() borderAnimation: boolean;

  render() {
    let borderAnimationContent = null;
    if (this.borderAnimation) {
      borderAnimationContent = [<div class="top"></div>, <div class="right"></div>, <div class="bottom"></div>, <div class="left"></div>];
    }
    return (
      <button class="btn">
        <slot />
        {borderAnimationContent}
      </button>
    );
  }
}
