import React from 'react';
import { BrowserRouter ,Route} from "react-router-dom";
import CreatePosts from './components/CreatePosts';
import DeletePosts from './components/DeletePosts';
import DetailsPosts from './components/DetailsPosts';
import EditPosts from './components/EditPosts';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App(){
  //Pasindu Alas
  //coment
    return (
      // <>
      // <Home/>
      // </>
        <BrowserRouter>
        <div className='container'>
          <NavBar/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={CreatePosts}></Route>
          <Route path="/edit/:id" component={EditPosts}></Route>
          <Route path="/delete/:id" component={DeletePosts}></Route>
          <Route path="/post/:id" component={DetailsPosts}></Route>
        </div>
        </BrowserRouter>
      
  );
}
    
export default App