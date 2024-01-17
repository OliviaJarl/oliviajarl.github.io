import { extendTheme,  type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/roboto';



const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

const theme = extendTheme({ config,
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      100: "#283141",
      200: "#4d6082",
    },
    buttons: {
      100: "#3F988E",
      200: "#FFFFFF",
      300: "#1B6D64",
      400: "#14554E",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#283141"
      },
    },
    Button: {
      baseStyle: {
        fontFamily: `'Roboto', sans-serif`,
      }
    }
  }
  
})

export default theme;