import Header from "./components/Header";
import Content from "./components/Content"
import {useState, useEffect} from 'react';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [items, setItems] = useState([]);
  const[reqType, setReqType] = useState('users');

  useEffect(()=>{
    const fetchUrl = async () =>{
      try{
        const response = await fetch(API_URL+reqType);
        if(!response.ok) throw Error(`couldn't fetch ${reqType}, reload app!`);
        const listItems = await response.json();
        setItems(listItems);
      } catch(err){
        console.log(err.message);
      }
      finally {
        console.log(reqType);
      }
    }
    fetchUrl();  
  },[reqType]);

  const handlePathChange = () => {
    console.log(reqType);
    setItems([{"id":1, "name":"Soham"}]);
  }

  return (
    <div>
      <Header 
        setReqType={setReqType} 
        handlePathChange = {handlePathChange}/>
      <Content items = {items} />
    </div>
  );
}
export default App;