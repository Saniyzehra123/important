import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Opreating System"
  const data = ["Android","Blackberry","iphone","Windows Phone"]
  const name2 = "Manufacture"
  const data2 = ["Samsung","HTC","Micromax","Apple"]
 
  return (
    <div>
     
       <h1> Mobile {name}</h1>
       <ul>
      
         {data.map((e) => (
           <p> 
          
             <li>{e}</li>
           
           </p>
         ))}
    </ul>

    <h1> Mobile {name2}</h1>
       <ul>
      
         {data2.map((e) => (
           <p> 
          
          <li style = {{
            listStyle: "circle",
          }}>{e}</li>
             {/* <li>{e}</li> */}
           
           </p>
         ))}
    </ul>
    </div>
  );
}

export default App;
