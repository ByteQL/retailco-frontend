const tabs = {
  baseStyle: {
    tablist: {
      justifyContent: 'center',

      '.chakra-tabs__tab': {
        borderBottomWidth: '3px',
        fontSize: '1.4rem',
        margin: '0 1rem',
        paddingBottom: '1rem',
        '&[aria-selected=true]': {
          color: 'brand.primary',
        },
      },
    },
  },
};
export default tabs;
