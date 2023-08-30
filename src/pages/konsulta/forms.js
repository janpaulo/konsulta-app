import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

class forms extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Label1"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              name="Label1"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Label2"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Label3"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Label4"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Label5"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Label6"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              // multiline
              // maxRows={4}
              sx={{ m: 1, width: "25ch" }}
              size="small"
              onChange={this.props.onchange}
            />
          </div>

          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              sx={{ m: 1, width: "25ch" }}
              onClick={() => this.props.handleClick()}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </>
    );
  }
}

export default forms;
