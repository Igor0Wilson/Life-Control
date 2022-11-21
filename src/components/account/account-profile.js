import { Avatar, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7',
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Avatar
        src={user.avatar}
        sx={{
          height: 64,
          mb: 2,
          width: 64,
        }}
      />
      <Typography color="textPrimary" gutterBottom variant="h5">
        {user.name}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {`${user.city} ${user.country}`}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {user.timezone}
      </Typography>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        Carregar foto
      </Button>
    </CardActions>
  </Card>
);
