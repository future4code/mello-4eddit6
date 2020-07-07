import React, { useState } from 'react'
import { 
	SignUpContainer, 
	Divider, 
	ButtonsContainer,
	SignUpFields,
  FullContainer,
  HalfScreen
} from './Styled'
import { TextField, Button, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useForm } from '../../Hooks/Hooks'
import { useHistory } from 'react-router-dom'
import SideImage from '../../Components/SideImage/SideImage'


const SignUpPage = () => {

  const [ showPassword, setShowPassword ] = useState(false)
  const history = useHistory()
  const { form, onChange, clear } = useForm({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }


	return(
		<FullContainer>

			<SideImage />
      <HalfScreen>
        <SignUpContainer>
          <Button 
            variant='contained' 
            style={{background: '#2F5ABA', color: '#FFFFFF'}}
          >
            Cadastre-se com o facebook
          </Button>

					<Divider>ou</Divider>

					<SignUpFields>
            <TextField 
              name='username' 
              value={form.username}
              onChange={handleChange}
              variant='outlined' 
              label='Nome de usuário'
            />

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
						}} />
					</SignUpFields>

					<ButtonsContainer>
						<Button variant='contained' >Cadastrar</Button>
						<Button onClick={() => history.goBack()}>Voltar para login</Button>
					</ButtonsContainer>
				</SignUpContainer>
      </HalfScreen>
		</FullContainer>
	)
}

export default SignUpPage