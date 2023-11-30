import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource-variable/roboto-serif';




const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  }

const theme = extendTheme({ config,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      100: "#323F56",
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
  }
  
})

export default theme;