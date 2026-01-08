import './App.css';
import { useState } from 'react';

function App() {

const [title, setTitle] = useState('');

function handleChange(event) {
   setTitle(event.target.value);
}


let message = '';
if (title.length < 5) {
   message = 'Title is too short';
} else if (title.length < 10) {
   message = 'Title is OK';
} else {
   message = 'Title is too long!';
}

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32] 

const movies = [
   { title: "Wall-E" },
   { title: "Pulp Fiction" },
   { title: "Matrix" },
   { title: "1670" },
];

return (
   <div>
      <h1>My favourite movies to watch.</h1>
      <h2>My favourite movie today is {title} </h2>
      <h2>Myf favourute movie today is {title.toUpperCase()} </h2>
      <div>{message}</div>
      <input type="text" onChange={handleChange} value={title}></input>
      <button>Click me</button>
   </div>
);

}


export default App;
