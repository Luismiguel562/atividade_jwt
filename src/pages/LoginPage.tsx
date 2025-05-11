import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Typography, Card, CardContent, Box } from '@mui/material'
import { useAuth } from '../utils/AuthContext'
import api from '../utils/axiosInstance'  // Certifique-se de ter o axiosInstance configurado corretamente

export default function LoginPage() {
    const [username, setUsername] = useState('LUIS')
    const [password, setPassword] = useState('luis')
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            // Fazendo a requisição para o login
            const res = await api.post('/auth/login', { username, password })
            
            // Armazenando o token no contexto de autenticação
            setToken(res.data.token)

            // Exibindo o token no console para debug
            console.log(res)
            console.log(`Token: ${res.data.token}`)

            // Navegando para a próxima página após o login
            navigate('/produtos')
        } catch (e) {
            // Tratamento de erro, exibindo um alerta caso o login falhe
            alert('Login falhou. Verifique suas credenciais.')
            console.error(`Erro no login:\n${e}`)
        }
    }

    return (
        <Container maxWidth="sm" sx={{ marginTop: '6vw' }}>
            <Card sx={{
                borderRadius: '16px',
                boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                paddingY: '12px'
            }}>
                <CardContent>
                    <Typography variant="h1" align='center' sx={{
                        fontWeight: 'bold',
                        fontSize: '2.4rem'
                    }}>Login</Typography>

                    <Box display="flex" justifyContent="center" marginTop={'32px'}>
                        <TextField
                            label="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{
                                borderRadius: '12px',
                                boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                                transformOrigin: 'center',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    fontSize: '1.2rem',
                                    width: '370px'
                                }
                            }} />
                    </Box>

                    <Box display="flex" justifyContent="center" marginTop={'22px'}>
                        <TextField
                            label="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                borderRadius: '12px',
                                boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px',
                                    fontSize: '1.2rem',
                                    width: '370px'
                                }
                            }} />
                    </Box>

                    <Box display="flex" justifyContent="center" marginTop={'32px'}>
                        <Button
                            variant="contained"
                            onClick={handleLogin}
                            sx={{
                                backgroundColor: '#b388ff',
                                '&:hover': {
                                    backgroundColor: '#9c66ff'
                                },
                                borderRadius: '32px',
                                boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.37)',
                                paddingX: '36px',
                                fontSize: '1.3rem'
                            }}>LOGIN</Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}
