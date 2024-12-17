import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import { Loader } from "react-feather";
import "./App.css";


function App() {

  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";


  const fetchQuotes = async () => {
    try {
      setLoading(true);
    const request = await fetch(quotesUrl);
    const response = await request.json(); 
    setQuotes(response);
    console.log(quotes);
  }

catch (e){
  console.log("Something went wrong", e)
};
setLoading(false);
  };

useEffect(() => {
  fetchQuotes();
}, [])

  return (
    <div className='App'>
      <Header />
      <main>{loading ? <Loader/> : <Quotes quotes={quotes}/>}</main>
      <Footer />
    </div>
  );
}
export default App;
