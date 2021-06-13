import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import './ItemListContainer.css'




const ItemListContainer = () => (
  <Item.Group divided class="container"  className='ItemProducto'>
    <Item>
      <Item.Image src='https://www.zonanegativa.com/imagenes/2019/12/Baoh.jpg' />

      <Item.Content>
        <Item.Header as='a'>Baoh: El visitante</Item.Header>
        <Item.Meta>
          <span className='cinema'>Autor: Hirohiko Araki</span>
        </Item.Meta>
        <Item.Description>Este manga cuenta las aventuras de Ikuro y Sumire, un adolescente y una niña que fueron víctimas de experimentos genéticos y psíquicos, respectivamente, a manos de la corporación Doress, la misma que ahora ha puesto precio a sus cabezas.</Item.Description>
        <Item.Extra>
          <Label>Tomo único</Label>
          <Button primary floated='right'>
           Comprar
            <Icon name='right chevron' />
          </Button>

        </Item.Extra>
       
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://contentv2.tap-commerce.com/cover/large/9788418562341_1.jpg?id_com=1163' />

      <Item.Content>
        <Item.Header as='a'>What a wonderful world</Item.Header>
        <Item.Meta>
          <span className='cinema'>Autor: Inio Asano</span>
        </Item.Meta>
        <Item.Description>Diferentes historias donde la cruda realidad de la sociedad moderna se mezcla con algo de fantasía, para entender el valor de la vida sin descuidar el caos en el que vivimos.</Item.Description>
        <Item.Extra>
        <Label>Tomo único</Label>
          <Button primary floated='right'>
           Comprar
            <Icon name='right chevron' />
          </Button>


        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://lh5.googleusercontent.com/proxy/hGZn7JiqjTEfyu-Sw90WHjiV9vBzds463LD1H1rqILm90nBooqb8kvyBbForRX5K4eZgY5D3QhJBWGEsVfdrAezTYDYPDpZ3jDboZjokx4wVToLDN2cbaI_kqKTWIDReCtotej-Z0hJZ4BlPFZ0r9AXwbJJp_as=w1200-h630-p-k-no-nu' />

      <Item.Content>
        <Item.Header as='a'>Uzumaki</Item.Header>
        <Item.Meta>
          <span className='cinema'>Autor: Junji ito</span>
        </Item.Meta>
        <Item.Description>Kurouzu, un pequeño pueblo rodeado por la niebla en la costa de Japón, está maldito. Según Shuichi Saitô, el novio de la joven Kirie Goshima, su hogar está encantado, no por una persona, sino por un patrón: Uzumaki, el espiral, el secreto hipnótico que da forma al mundo.</Item.Description>
        <Item.Extra>
        <Label>Tomo único</Label>
          <Button primary floated='right'>
           Comprar
            <Icon name='right chevron' />
          </Button>

        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemListContainer
