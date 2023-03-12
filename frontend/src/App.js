import './App.css';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationComponent from './Components/LocationComponent/LocationComponent';
import DemoComponent from './Components/DemoComponent/DemoComponent';
import MissingComponent from './Components/MissingComponent/MissingComponent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-2xl tracking-tight"><a href="/">Flood Risk Analysis</a></span>
          </div>
          <div className="flex items-center w-auto">
            <div className="text-sm flex-grow">
              <a href="/presentation" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Presentation
              </a>
              <a href="/demo" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                Demo
              </a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/'>
            <Route index element={<HomeComponent></HomeComponent>}/>
            <Route path="/presentation" element={<LocationComponent></LocationComponent>}/>
            <Route path="/demo" element={<DemoComponent></DemoComponent>}/>
            <Route path="*" element={<MissingComponent></MissingComponent>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
