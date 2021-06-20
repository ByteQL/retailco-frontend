const link = {
  baseStyle: {
    fontSize: 'inherit',
    _focus: {
      boxShadow: 'none',
    },
  },

  variants: {
    sideMenuItem: {
      width: '95%',
      lineHeight: '2.2rem',
      display: 'flex',
      padding: '1.5rem 6.5rem',
      fontWeight: '500',
      _hover: {
        textDecoration: 'none',
      },
      _focus: {
        boxShadow: 'none',
      },
      '&.menu-item--active': {
        padding: '1.5rem 4rem',
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '1rem',
        textAlign: 'center',
        marginLeft: '2.5rem',
        position: 'relative',

        _hover: {
          backgroundColor: 'black',
          color: '#fff',
          textDecoration: 'none',
        },
        _before: {
          display: 'block',
          content: '""',
          position: 'absolute',
          left: '-2.8rem',
          top: '0',
          backgroundColor: 'black',
          height: '100%',
          width: '1rem',
          borderRadius: '0 1rem 1rem 0;',
        },
      },
      '.menu-item__icon': {
        height: '2.2rem',
        lineHeight: '2.2rem',
        marginRight: '1rem',
      },
    },
  },

  // The default size and variant values
};
export default link;
