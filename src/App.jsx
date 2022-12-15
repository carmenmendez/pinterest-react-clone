// import reactLogo from './assets/react.svg'

import NavBar from '../components/NavBar';
import CardsGrid from '../components/CardsGrid';
import './App.css';
import PinCard from '../components/PinCard';

const pins = [
  { id:1, title:'perro', image:'https://picsum.photos/id/427/200/300', description:'imagen de un perrito'},
  { id:2, title:'perro', image:'https://picsum.photos/id/421/200/300', description:'imagen de un perrito'},
  { id:3, title:'perro', image:'https://picsum.photos/id/425/200/300', description:'imagen de un perrito'},
  { id:4, title:'perro', image:'https://picsum.photos/id/467/200/300', description:'imagen de un perrito'},
  { id:5, title:'perro', image:'https://picsum.photos/id/490/200/300', description:'imagen de un perrito'},
  { id:6, title:'perro', image:'https://picsum.photos/id/160/200/300', description:'imagen de un perrito'},
]

function App() {

  return (
    <div className="App">
      <NavBar />
      <CardsGrid>
        {pins.map(({ id, title, image, description }) => <PinCard key={id} title={title} image={image} description={description} />)}
      </CardsGrid>
    </div>
  )
}

export default App
