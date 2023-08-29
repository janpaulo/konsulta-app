import React from "react";
import Typography from '@mui/material/Typography';
import Forms from './forms'

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
				<div>
					<Forms />
				</div>
      </>
    );
  }
}

export default mainKonsultaForm;
