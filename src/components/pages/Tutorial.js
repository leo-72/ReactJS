import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import IsiTutorial from '../IsiTutorial';

function Beranda() {
  return (
    <>
      <IsiTutorial />
      <Cards />
      <Footer />
    </>
  );
}

export default Beranda;
