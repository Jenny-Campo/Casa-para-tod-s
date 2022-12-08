import React from 'react';
import { Card, CardActions, CardContent, TextField, Button, Icons  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/user'

function RegisterPage() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    //const [date, setDate] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    //const [adress, setAdress] = useState()
    //const [location, setLocation] = useState()
    //const [province, setProvince] = useState()
    //const [phoneNumber, setPhoneNumber] = useState()
    //const [aboutYou, setAboutYou] = useState()
    //const [lookingFor, setLookingFor] = useState()
    //const [hobbies, setHobbies] = useState()
    //const [smoker, setSmoker] = useState()
    //const [pets, setPets] = useState()
    //const [employment, setEmployment] = useState()
    //const [photo, setPhoto] = useState()
    //const [rules, setRules] = useState()
    //const [roommate, setRommmate] = useState()
    



    const navigate = useNavigate()

    const register = () => {
        const user = {
            name,
            surname,
            email,
            password
        }
        signup(user)
        navigate('/')
    }


  return (
    <Card sx={{'@media print': {width: 300}, margin: '30px auto'}}>
        <CardContent>
            <TextField label="name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
            
            
            <TextField label="surname" variant="outlined" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <TextField label="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField label="password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}} color='succes'>
            <Button onClick={() => register()}>Crea tu perfil</Button>
        </CardActions>
    </Card>
  )
}

export default RegisterPage

// InputProps={{
            //     startAdornment : (
            //         <InputAdornment position='start'>
            //             <Name />
            //         </InputAdornment>