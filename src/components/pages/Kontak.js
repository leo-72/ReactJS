import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import IsiKontak from '../IsiKontak';

function Beranda() {
  return (
    <>
      <IsiKontak />
      <Cards />
      <Footer />
    </>
  );
}

export default Beranda;
