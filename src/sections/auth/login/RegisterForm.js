import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { AuthContext } from '../../../context/authContext';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { createUserWithEmail } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    createUserWithEmail(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChange={onChange}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              margin="normal"
              value={value || ''}
              label="Nome"
              type="text"
            />
          )}
          rules={{
            required: 'Nome é um campo obrigátorio!',
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChange={onChange}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              margin="normal"
              value={value || ''}
              label="E-mail"
              type="text"
            />
          )}
          rules={{
            required: 'E-mail é um campo obrigátorio!',
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChange={onChange}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={value || ''}
              label="Senha"
              type={showPassword ? 'text' : 'password'}
            />
          )}
          rules={{
            required: 'Senha é um campo obrigátorio!',
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Cadastrar
        </LoadingButton>
      </Stack>
    </Box>
  );
}
