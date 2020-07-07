import React, { useState } from "react";
import { 
  LoginContainer, 
  ScreenDivision, 
  LoginFieldsContainer, 
  Logo, 
  FieldsContainer, 
  Divider 
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

export default function LoginPage() {
  
  const [ showPassword, setShowPassword ] = useState(false)

  return (
    <LoginContainer>
      <ScreenDivision>
        <Logo>
          <h3>Bananinhaddit</h3>
        </Logo>
      </ScreenDivision>

      <ScreenDivision>
        <LoginFieldsContainer>
            <Typography variant='h5' align='center'>Login</Typography>
            <FieldsContainer>

              <TextField variant='outlined' label='Email' />

              <TextField 
                  variant='outlined' 
                  label='Password' 
                  type={showPassword ? 'text' : 'password'} 
                  InputProps={{
                      endAdornment: (   
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      )
              }} />
              <Typography variant='subtitle2' align='right'>Esqueci minha senha</Typography>
            </FieldsContainer>

            <Button variant='contained' fullWidth>Entrar</Button>
            
            <Divider>ou</Divider>

            <Button variant='contained' fullWidth>Criar conta com e-mail</Button>
        </LoginFieldsContainer>
      </ScreenDivision>

    </LoginContainer>
  );
}
