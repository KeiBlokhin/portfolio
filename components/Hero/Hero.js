import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import styles from './styles'
import Image from 'next/image'

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box>
          <Typography variant='h2' sx={styles.title}>
            Learn coding <br />
            by building projects
          </Typography>
          <Typography variant='body1' sx={styles.text}>
            Learn programming and web development the easy way! Get unlimited
            access to all of our courses.
          </Typography>
          <Button sx={styles.btn} variant='contained'>
            Start learning
          </Button>
        </Box>
        <Image
          src='/img/coding-hero.svg'
          alt='code'
          width='608'
          height='534'
          sx={styles.photo}
        />
      </Box>
    </Box>
  )
}

export default Hero
