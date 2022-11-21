// import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../sections/auth/login/RegisterForm';
import useResponsive from '../hooks/useResponsive';
import { AccountProfile } from '../components/account/account-profile';
import { StyledContent, StyledRoot, StyledSection } from './LoginPage';

export default function Register() {
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title>Portal psicologia | Cadastro</title>
      </Helmet>

      <StyledRoot>
        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Olá, Bem vindo!!
            </Typography>
            <img src="/assets/illustrations/icone.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Cadastro
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Já possui conta em nossa plataforma? {''}
              <Link variant="subtitle2" onClick={navigate('/login')}>
                Faça o login
              </Link>
            </Typography>

            <AccountProfile />

            <RegisterForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
