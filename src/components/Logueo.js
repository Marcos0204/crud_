import React, { useState } from 'react';
import { Stack, Container, Form, Button } from "react-bootstrap";

const Logueo = () => {

    const [ iseRegister, SetIsRegister ] = useState(false)

    function submitHandler() {

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
