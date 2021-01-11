import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import IsiDaftar from '../IsiDaftar';

function Beranda() {
  return (
    <>
      <IsiDaftar />
      <Cards />
      <Footer />
    </>
  );
}

export default Beranda;
