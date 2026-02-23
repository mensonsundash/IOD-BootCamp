import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './routing/AppRouting'



function App() {
  

  return (
    <>
      {/* Navigation Bar*/}
      <NavBar></NavBar>
      
      {/* All Routed Links Component rendered here*/}
      <AppRoutes></AppRoutes>
    </>
  )
}

export default App
