import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from "./components/ProductItem"
export class App extends Component {

  constructor() {
    super();
    this.state = {
      myProducts: [],
      counter: 0,
      list: {
        name: 'Narmin'
      }
    }
  }

  // lifecycle

  componentDidMount() {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data.products)
        this.setState({ myProducts: res.data.products })
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              {
                this.state.myProducts.map((item, index) => {
                  return <ProductItem myProduct={item} key={index} />
                })
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default App