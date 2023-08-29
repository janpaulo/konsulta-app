import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

class forms extends React.Component{
    constructor(){
        super();
        this.state={
            items : [
                        
                    ],

										
        }
				this.handleSubmit = this.handleSubmit.bind(this)
      }

			
			handleSubmit(params) {
				console.log("here me")
			}

      render(){
        return (
          <>
            <Box sx={{ display: "flex", flexWrap: "wrap"}}>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
                />

                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  // multiline
                  // maxRows={4}
                  sx={{ m: 1, width: "25ch" }}
                  size="small"
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
									onClick={() => this.handleSubmit()}
									
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