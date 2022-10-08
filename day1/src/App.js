 
import './App.css';

function App() {
  const food="pizza";

  const age=12;
  const data = ["a","b","c"];
  return (
    <div className="App">
      your fav food is {food} ,you are {age} years old
 
 <div>you r are{age > 20? "eligible": "not eligible"}for licence</div>
 
 {/* <ul>
 
   {d.map((e)=>{
    <p className='redtext'>Skill:{e}</p>
   })}
 </ul> */}
 <div>
 
   {data.map((e)=>{
    return  <Skill data={e}/>
   })}
 </div>
 {/* <Skill/>
 <Skill/>
 <Skill/> */}
 
    </div>
  );
}

function Skill(props){
 console.log("skill",props)
  return <p className='redtext'>Skill: {props.data}</p>
}
export default App;
