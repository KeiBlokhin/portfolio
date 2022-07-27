import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'next/link'
import styles from './styles'

const pages = ['Courses', 'About', 'Contact']

const Navbar = () => {
  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Link
              sx={{
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'Bebas Neue',
                display: 'flex',
                alignItems: 'center',
              }}
              component={RouterLink}
              to='/'
            >
              <Image
                src='/img/rakurakulogo.png'
                alt='code'
                width='130'
                height='30'
                sx={styles.logo}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' aria-haspopup='true'>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Link
              sx={{
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'Trocchi',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
              }}
              component={RouterLink}
              to='/'
            >
              <Image
                src='/img/rakurakulogo.png'
                alt='code'
                width='130'
                height='30'
                sx={styles.logo}
              />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-start',

              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={RouterLink}
                underline='none'
                to={`/${page}`}
                sx={{
                  my: 2,
                  color: 'black',
                  fontSize: '1rem',
                  textTransform: 'none',
                }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
