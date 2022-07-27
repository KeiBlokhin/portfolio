import MuiCard from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'

const styles = {
  card: {
    maxWidth: '382px',
    padding: 0,
  },
  btn: {
    textTransform: 'capitalize',
  },
  cardImg: {},
  courseImgWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
}
const Card = () => {
  return (
    <MuiCard sx={styles.card}>
      <CardMedia sx={styles.cardImg}>
        <div style={styles.courseImgWrapper}>
          <Image
            src='/img/js-course.png'
            width='382px'
            height='342px'
            objectFit='cover'
          />
        </div>
      </CardMedia>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant='h5'>
          Web Development & Code 101 - Full Free Course [2022]
        </Typography>
        <Typography variant='body1'>
          Learn programming in JS language, HTML, and CSS. Create a Web
          Application made in React JS. The path to the final project includes
          many assignments, code exercises, and challenges.
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={styles.btn}>
          <Image src='/img/udemy-logo.png' alt='udemy' width='30' height='30' />
          View On Udemy
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
