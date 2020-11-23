import React, { useState, useEffect } from 'react';

import './App.scss';
import Header from './components/Header';
import NavMain from './components/NavMain';
import Container from './components/Container';
import Footer from './components/Footer';
import DataTransaction from './data-transaction.json';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataTransaction, setDataTransaction] = useState([]);

  console.log(DataTransaction);

  useEffect(()=>{
    setDataTransaction(DataTransaction);
    setIsLoaded(true);  
    // fetch(DataTransaction)
    //   .then(res=> res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setDataTransaction(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )
  }, []);

  if(error) {
    return <div>Error: {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header />
        <NavMain />
        <Container data={dataTransaction} />
        <Footer />
      </div>
    );
  }
}

export default App;
