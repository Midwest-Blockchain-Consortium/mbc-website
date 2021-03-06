const styles = {
  root: {
    margin: '1em',
    animation: '$fadeIn 1s'
  },
  '@keyframes fadeIn': {
    from: {opacity: 0},
    to: {opacity: 1}
  },
  title: {
    paddingTop: '.5em',
    paddingLeft: '3rem',
    paddingRight: '3em'
  },
  subtitle: {
    top: '-15em',
    paddingLeft: '3rem'
  },
  textBox: {
    padding: '1em',
  },
  textCard: {
    margin: '1em',
    marginLeft: '0em',
  },
  spacer: {
    margin: '5em'
  },
  spacerSmall: {
    margin: '1em'
  },
  registerDiv: {
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '3em',
    color: 'white'
  }
}

export default styles
