import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Tutorial</h1>
      <h2>Framework JavaScript</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/reactjs.jpg'
              text='React JS adalah sebuah pustaka/library javascript yang bersifat open source untuk membangun User Interface yang dibuat oleh Facebook'
              label='React JS'
              path='/tutorial'
            />
            <CardItem
              src='images/nodejs.jpg'
              text='Node JS adalah perangkat lunak yang didesain untuk mengembangkan aplikasi berbasis web dan ditulis dalam sintaks bahasa pemrograman JavaScript'
              label='Node JS'
              path='/tutorial'
            />
            <CardItem
              src='images/vuejs.jpg'
              text='Vue JS adalah sistem yang mampu membantu kita dalam me render data kedalam DOM secara deklaratif menggunakan sintaks template yang mudah dan jelas'
              label='Vue JS'
              path='/tutorial'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/angularjs.jpg'
              text='Angular JS adalah framework software open-source yang digunakan untuk membuat single-page aplikasi berbasis website'
              label='Angular JS'
              path='/tutorial'
            />
            <CardItem
              src='images/meteorjs.jpg'
              text='Meteor JS adalah platform Javascript untuk membangun web dan aplikasi mobile'
              label='Meteor JS'
              path='/tutorial'
            />
            <CardItem
              src='images/mithriljs.jpg'
              text='Mithril JS adalah Framework JavaScript dengan pola MVC klasik yang berukuran kecil (7kb) dan cepat'
              label='Mithril JS'
              path='/tutorial'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
