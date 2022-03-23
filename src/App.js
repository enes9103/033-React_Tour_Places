import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import Card from "./components/cards/Card"
import { data } from "./helper/data"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Card cards = {data}/>     
    </div>
  )
}

export default App;
