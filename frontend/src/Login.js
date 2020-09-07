import React from 'react';
import { connect } from 'react-redux';
import { login } from './redux/action';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';



class Login extends React.Component {
 constructor(props){
    super(props);
    this.state = {
        username: "orange casidy",
        password: "abcd" ,
        message:"",
    }
 }

componentWillReceiveProps(nextProps){
    console.log("recieve next")
    if(nextProps.token)
        this.props.changeScreen()

}

 handleInputChange = tag => e => {
    this.setState({[tag]: e.target.value})
 }


  onSubmit = e => {
    e.preventDefault()
    const post = {
      username: this.state.username,
      password: this.state.password
    }

     this.props.login(post);
     console.log(this.props.info.ok)
     console.log(this.props)

  }


 render(){

  return (
  <MuiThemeProvider>
    <div>
        <AppBar title="Signin" ></AppBar>
        <TextField floatingLabelText="username"  hintText="enter the username" onChange={this.handleInputChange("username")} />
        <TextField floatingLabelText="password" type="password" hintText="enter the Password" onChange={this.handleInputChange("password")} />
        <Button primary="true" label="Submit" onClick={this.onSubmit}/>

         <h1>{this.state.message}</h1>

    </div>
    </MuiThemeProvider>
  );
}
}

const mapStateToProps = state => ({
  info: state.loginDetails,
  token: state.loginDetails.token
});


export default connect(mapStateToProps, { login })(Login);
