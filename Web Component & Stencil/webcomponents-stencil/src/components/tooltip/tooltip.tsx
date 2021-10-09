import { Component, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'uc-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true,
})
export class Tooltip {
  @Prop({ reflect: true }) tooltipContent: string;
  @Prop({ reflect: true, mutable: true }) tooltipOpened: boolean;

  @Listen('click', { target: 'window' })
  handleClick(ev) {
    if (ev.target.nodeName.toLowerCase() !== 'uc-tooltip') {
      this.closeTooltip();
    }
  }

  closeTooltip() {
    if (this.tooltipOpened) {
      this.toggleTooltip();
    }
  }

  toggleTooltip() {
    this.tooltipOpened = !this.tooltipOpened;
  }

  render() {
    return [
      <slot />,
      <span class="tooltip-icon" onClick={() => this.toggleTooltip()}>
        ?
      </span>,
      <div class="tooltip-content">{this.tooltipContent}</div>,
    ];
  }
}
