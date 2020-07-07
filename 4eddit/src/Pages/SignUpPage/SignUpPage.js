import React, { useState } from 'react'
import { 
    SignUpContainer, 
    Divider, 
    ButtonsContainer,
    SignUpFields,
    ScreenDivision,
    FullContainer
} from './Styled'
import { TextField, Button, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'


const SignUpPage = () => {

    const [ showPassword, setShowPassword ] = useState(false)

    return(
        <FullContainer>
            <ScreenDivision>
                
            </ScreenDivision>

            <ScreenDivision>
                <SignUpContainer>
                    <Button variant='contained' style={{background: '#2F5ABA', color: '#FFFFFF'}}>Cadastre-se com o facebook</Button>

                    <Divider>ou</Divider>

                    <SignUpFields>
                        <TextField variant='outlined' label='Nome de usuário'/>

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
                    </SignUpFields>

                    <ButtonsContainer>
                        <Button variant='contained' >Cadastrar</Button>
                        <Button>Voltar para login</Button>
                    </ButtonsContainer>
                    
                </SignUpContainer>
            </ScreenDivision>
        </FullContainer>
    )
}

export default SignUpPage