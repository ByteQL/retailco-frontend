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
  },
  sizes: {
    sm: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
      height: '3.5rem',
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
