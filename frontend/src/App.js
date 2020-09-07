import React from 'react';
import './App.css';
import Login from './Login'
import ContentList from './ContentList'
import { Provider } from 'react-redux'
import store from './redux/store.js';

class App extends React.Component {

 constructor(props){
    super(props);
    this.state = {
        login: false,
    }
    }
  changeScreen =()=>{
    this.setState({login: true})
  }

   switchStatement=()=>{
   switch (this.state.login)
        {
        case false: return <Login changeScreen={this.changeScreen} />;
        case true: return <ContentList/>;
        default: return <Login/>;
        }

   }


  render(){
  return (
  <Provider store={store}>
    <div className="App">
        <h1>Username And password</h1>
         {this.switchStatement()}

    </div>
    </Provider>
  );
}
}
export default App;
