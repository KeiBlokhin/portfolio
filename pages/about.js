import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CustomButton from '../components/CustomButton'

import Avatar from '@mui/material/Avatar'
import AdbIcon from '@mui/icons-material/Adb'
import Image from 'next/image'
import MePhoto from '../public/img/filip-instructor.jpeg'
import BackgroundImg from '../public/img/5570863.jpg'

const styles = {
  about: { minHeight: '100vh', background: '#F9FAFB' },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '88px 20px',
  },
  aboutInfo: {
    padding: '20px',
    margin: '20px',
  },
  pageTitle: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#6C63FF',
    fontSize: '16px',
  },
  title: {
    fontSize: '36px',
    linHeight: '32px',
    fontWeight: 700,
    margin: '5px',
    padding: '5px',
  },
  text: {
    fontSize: '20px',
    lineHeight: '28px',
    margin: '10px 0 30px 0',
    padding: '20px 10px',
  },
  card: {
    width: '650px',
    borderRadius: '8px',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    overflow: 'hidden',
  },
  avatar: {
    width: '80px',
    height: '80px',
    border: '1px solid white',
    position: 'relative',
    top: -30,
    left: 20,
  },
  cardContent: { padding: '5px 5px 0 5px' },
  cardHeader: { display: 'flex', padding: '10px' },
  cardFooter: {
    background: '#6C63FF',
    color: 'white',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    postion: 'absolute',
  },
  footerInfo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px',
    borderBottomLeftRadius: '8px',
  },
  footerTitle: {
    marginX: '15px',
    fontWeight: 600,
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
  },
  footerText: {
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 600,
    color: '#A5B4FC',
  },
}

const About = () => {
  return (
    <Box sx={styles.about}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.aboutInfo}>
          <Typography variant='h3' sx={styles.pageTitle}>
            about us
          </Typography>
          <Typography variant='h3' sx={styles.title}>
            What makes us different
          </Typography>
          <Typography variant='body1' sx={styles.text}>
            Eincode ensures to provide the best online learning experience for
            its audience. High-quality content and programming concepts
            explained in real-life projects are fields where Eincode shines!
            Eincode is covering mainly courses focusing on programming guides
            for web and mobile development. If you are looking for complete and
            comprehensive guides, then Eincode is the right choice for you.
          </Typography>
          <Box>
            <CustomButton bgColor='#6C63FF' txtColor='white' txt='Contact' />
            <CustomButton bgColor='white' txtColor='#6C63FF' txt='Learn more' />
          </Box>
        </Box>
        <Box sx={styles.cardSection}>
          <Box sx={styles.card}>
            <Box sx={styles.cardContent}>
              <Box sx={styles.cardHeader}>
                <AdbIcon />
                <Typography variant='h5'>Kei Blokhin</Typography>
              </Box>

              <Typography variant='body1' sx={styles.text}>
                Eincode ensures to provide the best online learning experience
                for its audience. High-quality content and programming concepts
                explained in real-life projects are fields where Eincode shines!
                Eincode is covering mainly courses focusing on programming
                guides for web and mobile development. If you are looking for
                complete and comprehensive guides, then Eincode is the right
                choice for you.
              </Typography>
            </Box>
            <Box sx={styles.cardFooter}>
              <Avatar sx={styles.avatar}>
                <Image src={MePhoto} />
              </Avatar>
              <Box sx={styles.footerInfo}>
                <Typography variant='h5' sx={styles.footerTitle}>
                  Kei Blokhin
                </Typography>
                <Typography sx={styles.footerText}>Udemy instructor</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About
