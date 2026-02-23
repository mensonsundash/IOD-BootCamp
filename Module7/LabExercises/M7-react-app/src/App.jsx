import './App.css'
import MUINavBar from './Components/Common/MUINavBar'

import NavBar from './Components/Common/NavBar'
import AppRoutes from './Routing/AppRoutes'

function App() {

  return (
    <>
    {/* Navigation Bar*/}
      {/* ######### Exercise 1-4 without MUI ############# */}
      {/* <NavBar></NavBar> */}

      {/* ##### Exercise with 5 MUI ##### */}
      <MUINavBar></MUINavBar>
    {/* All Routed Links Component rendered here*/}
      <AppRoutes></AppRoutes>
    </>
  )
}

export default App
