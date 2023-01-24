import React from 'react';
import { Route,Switch } from 'react-router-dom';
import App from './App';
import Page2 from './Page2';

const MyRoute=()=>{
 return(
     <>
     <Switch>
         <Route exact path='/' component={App} />
         <Route path='/details' component={Page2} />
     </Switch>
     {/*<App />
     <Page2 />*/}
     </>
 )
}

export default MyRoute;

