import React from "react";
import Typography from '@mui/material/Typography';
import Forms from './forms'

class mainKonsultaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Konsulta Register Form",
      konsultaItem: {},
      items: [],
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  
  handleSubmit(params) {
    console.log("here me")
      this.setState({
        bank: {
          ...this.state.bank,
          name: e.target.value
        }
      })
    
  }

  handleInputChange(e) {
    console.log(e.target.value)
    this.setState({
      konsultaItem: {
        ...this.state.konsultaItem,
        [e.target.name]: e.target.value
      }
    })
  }


  render() {
    console.log(this.state.konsultaItem.Label1)
    return (
      <>
        <Typography variant="h5" component="h5">
          {this.state.title}
          {this.state.konsultaItem.Label1}
        </Typography>
        <div>
          <Forms
            handleClick={this.handleSubmit}
            onchange={this.handleInputChange}
          />
        </div>
      </>
    );
  }
}

export default mainKonsultaForm;
