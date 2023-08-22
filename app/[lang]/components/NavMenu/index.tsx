'use client';

import { Box, Drawer, List, ListItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Anchor, NavLinkType } from '@/types';
import { StyledLink } from './styles';
import SocialLinks from '../SocialLinks';

interface INavMenu {
  anchor: Anchor;
  listData: NavLinkType[];
}

export default function NavMenu({ anchor, listData }: INavMenu) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listData.map((link) => (
          <ListItem key={link.path}>
            <StyledLink href={link.path}>
              <Typography variant='md700'>{link.title}</Typography>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
        <Stack
          direction={'row'}
          sx={{ background: '#000', justifyContent: 'center' }}
        >
          <SocialLinks />
        </Stack>
      </Drawer>
    </>
  );
}
