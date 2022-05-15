import './App.css';

function App() {
  
  return (
    <div className="App">
          <Counter></Counter>
    </div>
  );
}

function Counter ()  {
      return(
        <div>
            <h1>Count: </h1>
            <button>Increase</button>
        </div>
      )
}


// function Product(props) {
//       return (
//         <div className="product">
//             <h3>Name: {props.name}</h3>
//             <p>Price: {props.price}</p>
//         </div>
//       )
// }
// const products = [
//   {name: 'laptop', price: 50000},
//   {name: 'phone', price: 20000},
//   {name: 'watch', price: 500},
//   {name: 'headphone', price: 1500},
// ]

// {
//   products.map(product =>   <Product name={product.name} price={product.price}></Product>)
// }

export default App;
