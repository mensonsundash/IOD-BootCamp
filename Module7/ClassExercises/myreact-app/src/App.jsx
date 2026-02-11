import { ThemeProvider } from '@mui/material'
import './App.css'
import ActivityFinder from './Components/ActivityFinder'
import AppRoutes from './Components/AppRoutes'
import NavBar from './Components/NavBar'
import SubscribeForm from './Components/SubscribeForm'
import { tealTheme } from './Components/TealTheme'
import { bloodTheme } from './Components/BloodTheme'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={bloodTheme}>
        {/* <div className='navigation'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div> */}
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
        {/* <ActivityFinder></ActivityFinder>
        <SubscribeForm></SubscribeForm> */}
      </ThemeProvider>
    </>
  )
}

export default App
