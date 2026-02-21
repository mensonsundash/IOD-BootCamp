import './App.css'

import NavBar from './Components/Common/NavBar'
import AppRoutes from './Routing/AppRoutes'

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
