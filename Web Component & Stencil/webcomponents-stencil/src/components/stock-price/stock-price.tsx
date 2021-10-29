import { Component, h, Prop, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;

  @Prop() stockSymbol: string;

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim()) {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    const stockSymbol = this.stockInput.value.trim();
    this.fetchStockPrice(stockSymbol);
  }

  componentWillLoad() {
    console.log('Component Will Load');
    console.log(this.stockSymbol);
  }

  componentDidLoad() {
    console.log('Component Did Load');

    if (this.stockSymbol) {
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate() {
    console.log('Component Will Update');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  disconnectedCallback() {
    console.log('Component Did Unload');
  }

  fetchStockPrice(stockSymbol: string) {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        // On invalid stock symbol, api sends empty Global Quote object
        if (!data['Global Quote']['05. price']) {
          throw new Error('Invalid symbol!');
        }
        this.error = null;
        this.fetchedPrice = +data['Global Quote']['05. price'];
      })
      .catch(err => (this.error = err.message));
  }

  render() {
    let dataContent = this.error ? <p>{this.error}</p> : this.fetchedPrice ? <p>Price: ${this.fetchedPrice}</p> : <p>Please enter a symbol!</p>;
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol" ref={el => (this.stockInput = el)} value={this.stockUserInput} onInput={this.onUserInput.bind(this)} />
        <button type="submit" disabled={!this.stockInputValid}>
          Fetch
        </button>
      </form>,
      <div>{dataContent}</div>,
    ];
  }
}
