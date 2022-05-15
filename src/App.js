import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
         <Users></Users>
    </div>
  );
}

function Users() {

  const [users , setUsers] = useState([]);

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(date => setUsers(date))
  },[]);

    return(
      <div>
          <h1>External Users</h1>
          <p>{users.length}</p>
          {
            users.map(user => <DisPlayUsers name={user.name}></DisPlayUsers> )
          }
      </div>
    )
}

function DisPlayUsers (props) {
   return(
    <div>
      <h3>{props.name}</h3>
    </div>
   )
}

// function Counter ()  {
//     const [count, setCount] = useState(0);

//     const Increase = () => { setCount(count + 1)};
//     const decrease = () => { setCount(count - 1)};

//       return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={Increase}>Increase</button>
//             <button onClick={decrease}>Decrease</button>
//         </div>
//       )
// }


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
