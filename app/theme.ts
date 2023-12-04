import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/roboto';



const config = {
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
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: {
          base: "xs",
          sm: "md",
          md: "lg",
        }
      },
    },
    Heading: {
      baseStyle: {
        color: "#323F56"
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