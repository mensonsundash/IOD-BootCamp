import './App.css'
import Greeting from './components/Greeting'

function App() {
  return (
    <>
      {/* Greeting component with prop name and children p */}
      <Greeting name='students' >
        <p>This is Childdren of Greeting Component</p>
      </Greeting>
    </>
  )
}

export default App
