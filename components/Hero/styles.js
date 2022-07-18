const styles = {
  hero: (theme) => ({
    padding: '20px',
    background: '#F9FAFB',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '44px 20px 20px',
    },
  }),
  wrapper: (theme) => ({
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '1240px',
      display: 'flex',
      alignItems: 'center',
      gap: '35px',
    },
  }),
  photo: {
    width: '100%',
    maxWidth: '509px',
    display: 'block',
    margin: '44px auto 0',
  },
  title: {
    fontSize: '40px',
    lineHeight: '45px',
    fontWeight: 600,
  },
  text: (theme) => ({
    margin: '25px 0',
    maxWidth: '630px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '44px',
    },
  }),
  btn: {
    borderRadius: '4px',
    padding: '12px 32px',
    textTransform: 'capitalize',
  },
}

export default styles
