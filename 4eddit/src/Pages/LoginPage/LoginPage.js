import React, { useState } from "react";
import { 
  LoginContainer, 
  LoginFieldsContainer,
  FieldsContainer, 
  Divider ,
  HalfScreen
} from "./Styled";
import { 
  TextField, 
  IconButton, 
  Typography, 
  Button 
} from '@material-ui/core'
import { 
  VisibilityOff, 
  Visibility 
} from '@material-ui/icons'
import { useHistory } from "react-router-dom";
import { useForm } from '../../Hooks/Hooks'
import SideImage from "../../Components/SideImage/SideImage";

export default function LoginPage() {
  
  const [ showPassword, setShowPassword ] = useState(false)
  const history = useHistory()

  const handleClick = () => {
    history.push('/signup')
  }

  const { form, onChange, clear } = useForm({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  return (
    <LoginContainer>
      
      <SideImage />

      <HalfScreen>
        <LoginFieldsContainer>
          <Typography 
            variant='h5' 
            align='center'
          >
            Login
          </Typography>
          <FieldsContainer>
            <TextField
              name='email'
              value={form.email}
              onChange={handleChange}
              variant='outlined' 
              label='Email' 
            />

            <TextField 
              name='password'
              value={form.password}
              onChange={handleChange}
              variant='outlined' 
              label='Password' 
              type={showPassword ? 'text' : 'password'} 
              InputProps={{
                  endAdornment: (   
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  )
              }} 
            />
            <Typography 
              variant='subtitle2' 
              align='right'
            >
              Esqueci minha senha
            </Typography>
          </FieldsContainer>

          <Button 
            variant='contained' 
            fullWidth
          >
            Entrar
          </Button>
          
          <Divider>ou</Divider>
          <Button 
            variant='contained' 
            fullWidth 
            onClick={handleClick}
          >
            Criar conta com e-mail
          </Button>
        </LoginFieldsContainer>
      </HalfScreen>
    </LoginContainer>
  );
}
