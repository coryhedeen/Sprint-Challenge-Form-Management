import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import FormikLogin from './components/Form';
import GoodFood from './components/UserCard';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      req: []
    }
  }

  componentDidMount(){
    axios
    .get("http://localhost:5000/api/restricted/data")
    .then(res => {this.setState({
      req: res.data
    })})
    .catch(err => console.log(err))
  }




  render(){
  return (
    <div className="App">
      <FormikLogin/>
      {this.state.req.map(item => <GoodFood card={item}/>)}
    </div>
  );
}
}

export default App;
