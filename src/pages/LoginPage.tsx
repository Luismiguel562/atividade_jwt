import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Typography, Card, CardContent, Box, InputAdornment } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import axios from 'axios'
import { useAuth } from '../utils/AuthContext'

export default function LoginPage() {
    const [username, setUsername] = useState('mor_2314')
    const [password, setPassword] = useState('83r5^_')
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password,
            })
            setToken(res.data.token)
            console.log(res)
            console.log(`Token: ${res.data.token}`)

            navigate('/produtos')
        } catch (e) {
            alert('Login fail')
            console.error(`Login fail:\n${e}`)
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: '#1e2a38',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Card
                    sx={{
                        borderRadius: '16px',
                        boxShadow: '0px 0px 14px rgba(48, 48, 48, 0.37)',
                        paddingY: '12px',
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '2.4rem',
                            }}
                        >
                            Login
                        </Typography>

                        <Box display="flex" justifyContent="center" marginTop="32px">
                            <TextField
                                label="User"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        fontSize: '1.3rem',
                                        width: '370px',
                                    },
                                }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="center" marginTop="22px">
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        fontSize: '1.2rem',
                                        width: '370px',
                                    },
                                }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="center" marginTop="32px">
                            <Button
                                variant="contained"
                                onClick={handleLogin}
                                sx={{
                                    backgroundColor: '#2f4f4f',
                                    '&:hover': {
                                        backgroundColor: '#2F4F4F',
                                    },
                                    borderRadius: '32px',
                                    boxShadow: '0px 0px 14px rgba(11, 10, 10, 0.37)',
                                    paddingX: '36px',
                                    fontSize: '1.5rem',
                                }}
                            >
                                LOGIN
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
