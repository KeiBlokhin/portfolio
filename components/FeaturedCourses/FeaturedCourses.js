import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '../Card'
import styles from './styles'

const data = [
  { title: 'Strategy' },
  { title: 'Product design' },
  { title: 'Development' },
]

const FeaturedCourses = () => {
  return (
    <Box sx={styles.featuredCourses}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>
          Get job-ready for an in-demand career
        </Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
          Break into a new field like frontend or backend web development
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item) => {
            return <Card title={item.title} />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default FeaturedCourses
