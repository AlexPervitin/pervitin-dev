'use client';

import Image from 'next/image';
import {
  HeaderInner,
  HeaderWrapper,
  LogoBlock,
  NavBlock,
  NavMenuWrapper,
  StyledLink,
  SwitchTheme,
  TypographyName,
} from './styles';
import logo from '/assets/images/header/logo_me.webp';
import { Typography, useColorScheme } from '@mui/material';
import { NAV_LINKS } from '@/constants';
import LanguageSelect from '../LanguageSelect';
import NavMenu from '../NavMenu';
import { Translations } from '@/i18n.config';

interface IHeader {
  tr: Translations;
}

export default function Header({ tr }: IHeader) {
  const { mode, setMode } = useColorScheme();

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked === true ? 'dark' : 'light');
  };

  const links = NAV_LINKS(tr);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoBlock>
          <Image src={logo} alt={'logo'} sizes='auto' fill />
          <TypographyName color={'primary'} variant='sm700'>
            {tr.alexpervitin}
          </TypographyName>
        </LogoBlock>

        <NavBlock>
          {links.map((link) => {
            return (
              <StyledLink href={`#${link.id}`} key={link.title}>
                <Typography color={'primary'} variant='sm700'>
                  {link.title}
                </Typography>
              </StyledLink>
            );
          })}
        </NavBlock>
        <NavMenuWrapper>
          <NavMenu anchor='right' listData={links} />
        </NavMenuWrapper>
        <LanguageSelect />
        <SwitchTheme
          checked={mode === 'dark' ? true : false}
          onChange={handleChangeTheme}
        />
      </HeaderInner>
    </HeaderWrapper>
  );
}
