import './App.css'
//rrd
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
//Layout
import RootLayout from './layout/RootLayout'
import CrewLayout from './layout/CrewLayout'
import PlanetLayout from './layout/PlanetLayout'
import TexnologyLayout from './layout/TexnologyLayout'
//pages
import Home from './pages/home/Home'
import Hurley from './pages/crew/Hurley'
import Victor from './pages/crew/Victor'
import Ansari from './pages/crew/Ansari'
import Mark from './pages/crew/Mark'
import Moon from './pages/destination/Moon'
import Mars from './pages/destination/Mars'
import Europa from './pages/destination/Europa'
import Titan from './pages/destination/Titan'
import Launch from './pages/texnology/Launch'
import Capsule from './pages/texnology/Capsule'
import Spaceport from './pages/texnology/Spaceport'
function App() {
  

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='crew' element={<CrewLayout/>}>
        <Route index element={<Hurley/>}/>
        <Route path='mark' element={<Mark/>}/>
        <Route path='victor' element={<Victor/>}/>
        <Route path='ansari' element={<Ansari/>}/>
        </Route>
        <Route path='planets' element={<PlanetLayout/>}>
        <Route index element={<Moon/>}/>
        <Route path='mars' element={<Mars/>}/>
        <Route path='europa' element={<Europa/>}/>
        <Route path='titan' element={<Titan/>}/>
        </Route>
        <Route path='tehnology' element={<TexnologyLayout/>}>
        <Route index element={<Launch/>}/>
        <Route path='capsule' element={<Capsule/>}/>
        <Route path='spaceport' element={<Spaceport/>}/>
        </Route>
      </Route>  
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
