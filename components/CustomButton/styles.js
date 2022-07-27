const styles = {
  btn: (bgColor, txtColor) => ({
    fontSize: '16px',
    lineHeight: '20px',
    borderRadius: '4px',
    padding: '12px 32px',
    textTransform: 'capitalize',
    margin: '10px',
    backgroundColor: bgColor ? bgColor : '#fff',
    color: txtColor ? txtColor : '#777FEB',
    boxShadow:
      '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
  }),
}

export default styles
