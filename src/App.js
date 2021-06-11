import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemListContainer/ItemListContainer';


class App extends Component {
  render() {
    return (
      

      <div className='App'>
       <Header/>
       <div className='UserSection'>
       <ItemList
            nombre={'Baoh. El visitante'}
            autor={'Autor: Hirohiko Araki'}
            descripcion={
              'Tomo unico. Este manga cuenta las aventuras de Ikuro y Sumire, un adolescente y una niña que fueron víctimas de experimentos genéticos y psíquicos, respectivamente, a manos de la corporación Doress, la misma que ahora ha puesto precio a sus cabezas.'
            }
            
            img={
              'https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/b/a/baoh.jpg'
            }
          />

        <ItemList
            nombre={'El diario gatuno de junji ito'}
            autor={'Autor: Junji ito'}
            descripcion={
              'Tomo Unico. Junji ito, famoso autor de cómic de terror, estrena un nuevo y reluciente hogar, que se dispone a compartir con su prometida. Pero ella no llegará sola, sino que vendrá acompañada de otro par de inquilinos: Yon, el gato con el que vivía en casa de sus padres, y el peludo Mu.'
            }
            
            img={
              'https://images-na.ssl-images-amazon.com/images/I/81ZE-ku9DnL.jpg'
            }
          />

        <ItemList
            nombre={'What a wonderful world'}
            autor={'Autor: Inio Asano'}
            descripcion={
              'Tomo unico. Diferentes historias donde la cruda realidad de la sociedad moderna se mezcla con algo de fantasía, para entender el valor de la vida sin descuidar el caos en el que vivimos.'
            }
            
            img={
              'https://i1.whakoom.com/large/22/36/0fed92ff6cd84dba8dc4b26258dc9f02.jpg'
            }
          />
        

          
        </div>
      </div>

      
     
    )
  }
}

export default App;