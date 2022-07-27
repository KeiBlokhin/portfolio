import Button from '@mui/material/Button'
import styles from './styles'

const CustomButton = ({ txt, txtColor, bgColor }) => {
  return (
    <Button style={{ ...styles.btn(bgColor, txtColor), ...styles.textStyle }}>
      {txt}
    </Button>
  )
}
export default CustomButton
