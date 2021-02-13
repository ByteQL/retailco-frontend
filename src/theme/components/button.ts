const button = {
  baseStyle: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    _focus: {
      boxShadow: '0 0 0 3px #094C8D',
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
    },
    outline: {
      backgroundColor: '#fff',
      border: '1px solid',
      _hover: { backgroundColor: '#fff', border: '1px solid' },
    },
    goldOutline: {
      bg: 'transparent',
      border: '1px solid #FF6B00',
      _hover: { bg: 'transparent', border: '1px solid #FF6B00' },
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
      paddingLeft: '40px',
      paddingRight: '40px',
      height: '35px',
    },
    lg: {
      padding: '17px 51px !important',
      height: '55px',
    },
    xl: {
      padding: '24px 113px !important',
      height: '70px',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'lg',
    variant: 'outline',
  },
};
export default button;
