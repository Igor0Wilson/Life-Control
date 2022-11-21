import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Link, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { StyledRoot } from '../../pages/LoginPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function RememberPasswordModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover" onClick={handleOpen}>
          Esqueci minha senha
        </Link>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledRoot>
            <Container maxWidth="sm">
              <Typography variant="h4" gutterBottom>
                Recuperação de senha
              </Typography>

              <Typography variant="body2" sx={{ mb: 5 }}>
                Entre com seu e-mail
              </Typography>
              <Stack spacing={3}>
                <TextField name="email" label="E-mail" />
                <LoadingButton fullWidth size="large" type="submit" variant="contained">
                  Redefinir senha
                </LoadingButton>
              </Stack>
            </Container>
          </StyledRoot>
        </Box>
      </Modal>
    </div>
  );
}
