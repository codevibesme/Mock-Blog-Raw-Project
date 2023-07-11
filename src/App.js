import Header from "./components/Header";
import Content from "./components/Content"
import {useState, useEffect} from 'react';


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [items, setItems] = useState([]);
  const[pathName, setPathName] = useState('');
  useEffect(()=>{
    const fetchUrl = async () =>{
      try{
        const response = await fetch(API_URL+pathName);
        if(!response.ok) throw Error(`couldn't fetch ${pathName}, reload app!`);
        const listItems = await response.json();
        setItems(listItems);
      } catch(err){
        console.log(err.message);
      }
      finally {
        console.log(pathName);
      }
    }
    fetchUrl();  
  },[pathName]);
  const handlePathChange = () => {
    console.log(pathName);
    setItems([{"id":1, "name":"Soham"}]);
  }
  return (
    <div>
      <Header 
        setPathName={setPathName} 
        handlePathChange = {handlePathChange}/>
      <Content items = {items} />
    </div>
  );
}
export default App;