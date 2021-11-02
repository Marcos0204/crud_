import React, { useState } from 'react';
import { Stack, Container, Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword,
            signInWithEmailAndPassword 
         } from 'firebase/auth';
import { auth } from '../FIrebase/Credentials';

const Logueo = () => {

    const [ iseRegister, SetIsRegister ] = useState(false)

    async function submitHandler(e) {
        e.preventDefault();
        const email= e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        if (iseRegister){
            const user= await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
        } else {
            signInWithEmailAndPassword(auth, email, password)
        }

    }
    return (
        <Container>
        <Stack gap={3}>
            <h1>{iseRegister ? 'Rigistrate' : 'inicia sesion'}</h1>
            <Form 
                onSubmit={submitHandler}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    {iseRegister ? 'Rigistrate' : 'inicia sesion'}
                </Button>
            </Form>
            <Button
                variant="primary"
                type="submit"
                style={{ width: "300px" }}
                //onClick={()=> signInWithRedirect(auth, googleAuthProvider)}
            >
                Acceder con Google
            </Button>
            <Button variant="secondary" onClick={() => SetIsRegister(!iseRegister)} style={{ width: "300px" }}>
            {iseRegister ?  '¿Ya tienes cuenta? inicia sesion' : '¿No tienes cuanta? Rigistrate' }
            </Button>
        </Stack>
    </Container>
    )
}

export default Logueo
