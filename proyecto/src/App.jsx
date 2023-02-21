import Navbar from '../components/Navbar'
import './App.css'

const hardware = ["Placa de video", "Procesador", "Placa Madre", "Periferico", "Gabinete"]

const App = () =>  {
  
  return (
    <div>
      <Navbar />
      <ul>
        <li>{hardware[0]}</li>
        <li>{hardware[2]}</li>
        <li>{hardware[3]}</li>
        <li>{hardware[4]}</li>
      </ul>
      <h1>MUNDO GAMER</h1>
    </div>
  )
}

export default App
