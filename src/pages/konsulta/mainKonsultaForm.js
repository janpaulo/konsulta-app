import React from "react";
import Typography from '@mui/material/Typography';

class mainKonsultaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Konsulta Register Form",
      items: [],
    };
    // function name(params) {
    //   ''
    // }
  }

  render() {
    return (
      <>
        <Typography variant="h5" component="h5">
          {this.state.title}
        </Typography>
      </>
    );
  }
}

export default mainKonsultaForm;
