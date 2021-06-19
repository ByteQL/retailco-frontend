const menuButtonStyle = {
  bg: 'transparent',
  boxShadow: '0px 2px 3px #0000000D',
  border: '1px solid #D1DAE0',
  borderRadius: '4px',
};

const button = {
  baseStyle: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    _focus: {
      boxShadow: '0 0 0 .3rem #094C8D',
    },
  },
  variants: {
    solid: {
      backgroundColor: 'brand.primary',
      color: '#fff',
      _hover: {
        backgroundColor: 'brand.primary',
        color: '#fff',
      },
      _loading: {
        backgroundColor: 'brand.primary',
        color: '#fff',
        '&[disabled]:hover': {
          backgroundColor: '#094C8D !important',
        },
      },
    },
    outline: {
      backgroundColor: '#fff',
      border: '.1rem solid',
      _hover: { backgroundColor: '#fff', border: '.1rem solid' },
    },
    goldOutline: {
      bg: 'transparent',
      border: '.1rem solid #FF6B00',
      _hover: { bg: 'transparent', border: '.1rem solid #FF6B00' },
    },
    black: {
      backgroundColor: 'black',
      color: '#fff',
      _hover: {
        backgroundColor: 'black',
        color: '#fff',
      },
    },
    menuButton: {
      ...menuButtonStyle,
      _hover: {
        ...menuButtonStyle,
      },
    },
  },
  sizes: {
    sm: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
      height: '3.5rem',
    },
    md: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
      height: '4rem',
    },
    lg: {
      padding: '1.7rem 5rem !important',
      height: '5rem',
      fontSize: 'md',
    },
    xl: {
      padding: '2.4rem 11rem !important',
      height: '6rem',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'lg',
    variant: 'outline',
  },
};
export default button;
