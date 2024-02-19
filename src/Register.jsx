
            import React from 'react';
            import { useForm } from 'react-hook-form';
            import { Button,Grid, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
            import { styled, useTheme } from '@mui/system';
            import logo from '../src/images/logo.jpg';
            
            const StyledContainer = styled(Container)(({ theme }) => ({
              marginTop: theme.spacing(4),
            }));
            
            const StyledForm = styled('form')(({ theme }) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: theme.spacing(3), // Add padding for better appearance
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Box shadow definition
              borderRadius: '0px', // Add border radius for rounded corners
              '& .MuiTextField-root, & .MuiFormControl-root': {
                margin: theme.spacing(1),
                width: "300px",
              },
              '& .MuiButton-root': {
                margin: theme.spacing(2),
              },
              '& .MuiTypography-root': {
                marginBottom: theme.spacing(2),
              },
              
              
            }));
            
            export default function Register() {
              const { register, formState: { errors }, handleSubmit } = useForm();
              const theme = useTheme();
            
              const onSubmit = (data) => {
                console.log(data);
              };
            
              return (
                <StyledContainer theme={theme}>
                    <Grid style = {{
                        backgroundColor:"#05043E",
                        height:"50px",
                        width:"auto",
                        borderTopLeftRadius:"8px",
                        borderTopRightRadius:"8px",
                        backgroundImage:logo,
                        backgroundSize:"cover",
                        backgroundPosition:"left-top",


                    }}>
                        <Grid style={{alignItems:'center', display:'flex'}}>
                        <img src={logo} alt="" width="50px" height="50px"/>

<Typography style={{color:'white'}}>
    PLAZER
</Typography>
                        </Grid>
                        

                        
                    </Grid>
                  
                  <StyledForm theme={theme} onSubmit={handleSubmit(onSubmit)}>
                    
                  <Grid style={{alignItems:'center', justifyContent:'center',display:'flex'}}>
                    <Typography variant="h4" >Create your Super App Account</Typography>
                    </Grid>
                  <TextField
              label="Email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Invalid email format" : ""}
            />
    
            <TextField
              label="Full Name"
              {...register("fullname", { required: true })}
              error={!!errors.fullname}
              helperText={errors.fullname?.type === "required" && "Fullname is required"}
            />
    
            <TextField
              label="Password"
              type="password"
              {...register("password", { required: true, minLength: 6, maxLength: 10, pattern: /^[a-zA-Z0-9_]+$/i })}
              error={!!errors.password}
              helperText={
                errors.password?.type === "required" && "Password is required" ||
                errors.password?.type === "pattern" && "Password is in the wrong format" ||
                errors.password?.type === "minLength" && "Password should be at least 6 characters" ||
                errors.password?.type === "maxLength" && "Password should be at most 10 characters"
              }
            />
    
            <TextField
              label="Address"
              {...register("address", { required: true })}
              error={!!errors.address}
              helperText={errors.address?.type === "required" && "Address is required"}
            />
    
            <FormControl>
              <InputLabel>Organization Name</InputLabel>
              <Select
                {...register("organization_name", { required: true })}
                error={!!errors.organization_name}
              >
                <MenuItem value="">--Please Select--</MenuItem>
                <MenuItem value="1">ABC Company</MenuItem>
                <MenuItem value="2">Zero One Company</MenuItem>
                <MenuItem value="3">XYZ Company</MenuItem>
              </Select>
            </FormControl>
    
            <TextField
              label="Telephone Number"
              {...register("telephone_number", { required: true, minLength: 10, maxLength: 10 })}
              error={!!errors.telephone_number}
              helperText={
                errors.telephone_number?.type === "required" && "Telephone number is required" ||
                errors.telephone_number?.type === "minLength" && "Entered telephone number is less than 10 digits" ||
                errors.telephone_number?.type === "maxLength" && "Entered telephone number is more than 10 digits"
              }
            />
    
            <FormControlLabel
              control={<Checkbox {...register("accept", { required: true })} />}
              label="Accept all conditions"
            />
            
            
                    <Button type="submit" variant="contained" color="primary">
                      Register
                    </Button>
                  </StyledForm>
                </StyledContainer>
              );
            }
            
        