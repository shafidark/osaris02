import React,{createContext, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// C:\Program Files\MongoDB\Server\5.0\
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Guitar from './Components/Shop/Guitar/Guitar';
import Bass from './Components/Shop/Bass/Bass';
import Builder from './Components/ClientBuilder/ClientBuilder';
import InStocks from './Components/Shop/InStocks/InStocks';
import Merch from './Components/Merch/Merch';
import Artist from './Components/Artist/Artist';
import Blog from './Components/Blog/Blog';
import GuitarDetails from './Components/Shop/Guitar/GuitarDetails';
import AdminMain from './Components/AdminPane/AdminMain';
import Gears from './Components/UsedGears/Gears';
import Care from './Components/G-Care/Care';
import Learn from './Components/Learn/Learn';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import BuilderDetailsPage from './Components/AdminPane/BuilderAdmin/BuilderDetailsPage';
import Cart from './Components/Cart/Cart'
export const userContext = createContext()
const App = () => {
  const [user, setUser] = useState({
    dashboard:true,
    guitars:false,
    useGuitar:false,
    stock:false,
    category:false,
    slider:false,
    merch:false,
    artist: false,
    contact: false,
    gcare:false,
    blog:false,
    learn:false
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path = '/' exact component={HomeMain}/>
          <Route path = '/guitar' exact component={Guitar}/>
          <Route path = '/bass' exact component={Bass}/>
          <Route path = '/builder' exact component={Builder}/>
          <Route path = '/in-stock' exact component = {InStocks}/>
          <Route path = '/gears' exact component = {Gears}/>
          <Route path = '/care' exact component = {Care}/>
          <Route path = '/artist' exact component = {Artist}/>
          <Route path = '/learn' exact component = {Learn}/>
          <Route path = '/blog' exact component = {Blog}/>
          <Route path = '/guitar/:id' exact component = {GuitarDetails}/>
          <Route path = '/adminPanel' exact component={AdminMain}/>
          <Route path = '/login' component={Login}/>
          <Route path = '/signup' component={Signup}/>
          <Route path = '/adminPanel/:id' exact component={BuilderDetailsPage}/>
          <Route path = '/cart' component= {Cart}/>
        </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;