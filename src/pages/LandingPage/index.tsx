import {
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-col">
        <h1
          style={{ fontFamily: 'Autography' }}
          className="text-9xl py-5">
          {' '}
          Bykowski Olaf
        </h1>
        <h2>
          This will be a portfolio site, it is still deep in development so
          check back regurarly for updates!
        </h2>
      </div>

      <div className="block place-self-end">
        <List
          sx={{ '--List-radius': '10px' }}
          className="rounded-xl"
          variant="outlined"
          color="primary"
          size="lg">
          <ListItem>
            <ListItemButton
              disabled
              onClick={() => navigate('/projects')}>
              <ListItemContent>Projects</ListItemContent>
            </ListItemButton>

            {/* <ListItemButton>
                    <ListItemContent>Blog</ListItemContent>
                  </ListItemButton> */}
          </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
            <ListItemButton
              disabled
              onClick={() => navigate('/contact')}>
              <ListItemContent>Contact</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
            <ListItemButton
              disabled
              onClick={() => navigate('/about')}>
              <ListItemContent>About me</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default LandingPage;
