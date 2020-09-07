import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from './redux/action';
import Button from 'material-ui/RaisedButton';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';

class Contentlist extends React.Component{

 constructor(props){
    super(props);
    this.state = {
        users: [],
    }
 }

  componentDidMount=()=>{
    this.props.getDetails()

 }



    check=()=>{
        console.log(this.props)
    }

  render(){
    return (
        <MuiThemeProvider >
        <AppBar title="All username and passwords" />
        <List>
        {this.props.info.users.map(ele=><ListItem key={ele._id} primaryText={ele.username} secondaryText={ele.password}/>)}
        {this.check()}
       </List>
       </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
  info: state.loginDetails,
});

export default connect(mapStateToProps, { getDetails })(Contentlist);