import React, {useEffect, useState} from 'react';



const ItemProd = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const prod= new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:1, nombre: "Uzumaki", autor:"Junji Ito", descripcion:"", precio:1500, imagenUrl:"https://ramenparados.com/wp-content/uploads/2017/04/Uzumaki-JP.jpg"},
                    {id:2, nombre:"What a wonderful world", autor:"Inio Asano", descripcion:"", precio: 1600, imagenUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/227/495/products/whatawonderfulworld1-70fa7040cc078d78c416111434976335-640-0.jpg"},
                    {id:3, nombre:" Baoh: El visitante", autor:"Autor: Hirohiko Araki", descripcion:"Este manga cuenta las aventuras de Ikuro y Sumire, un adolescente y una niña que fueron víctimas de experimentos genéticos y psíquicos, respectivamente, a manos de la corporación Doress, la misma que ahora ha puesto precio a sus cabezas.", precio: 800, imagenUrl:"https://www.zonanegativa.com/imagenes/2019/12/Baoh.jpg"},
                    {id:4, nombre: "La biblioteca secreta", autor:"Haruki Murakami", descripcion:"Pesadilla kafkiana y al mismo tiempo una sensible historia sobre la pérdida y la soledad. Murakami construye a través de su habitual estilo, cargado de símbolos tan familiares como herméticos, una historia sutil acompañada por las turbadoras ilustraciones de Kat Menschik." , precio:2000, imagenUrl:"https://images.cdn1.buscalibre.com/fit-in/360x360/79/37/7937ba6921666aded229a1c3891c1f7e.jpg"}
                ])

            }, 2000)
        })
        prod.then((resultado)=>{
            setProductos(resultado);
        })
    }, [])


    console.log('productos', productos);
    
    return ( 
        <div>
            {productos.map(prod => <h5>Listado de productos</h5>)}

        </div>
     );
}
 
export default ItemProd;