const link = {
  baseStyle: {},
  variants: {
    sideMenuItem: {
      width: '255px',
      lineHeight: '22px',
      display: 'flex',
      padding: '15px 65px',
      fontWeight: 'bold',
      _hover: {
        textDecoration: 'none',
      },
      _focus: {
        outline: 'none',
        boxShadow: '0 0 0 .5px black',
      },
      '&.menu-item--active': {
        padding: '15px 40px',
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '10px',
        textAlign: 'center',
        marginLeft: '25px',
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
          left: '-28px',
          top: '0',
          backgroundColor: 'black',
          height: '100%',
          width: '10px',
          borderRadius: '0px 10px 10px 0px;',
        },
      },
      '.menu-item__icon': {
        height: '22px',
        lineHeight: '22px',
        marginRight: '10px',
      },
    },
  },

  // The default size and variant values
  //   defaultProps: {
  //     size: 'md',
  //     variant: 'outline',
  //   },
};
export default link;
