import { Box } from "@chakra-ui/react";
import "./Background.css";

const CurvyBackground = () => {
  return (
    <Box
      className="gradientBackground"
      h={{
        base: "70vh",
        sm: "90vh",
        md: " 65vh",
        lg: "75vh",
        xl: "90vh",
        "2xl": "80vh",
      }}
      maxH={{
        base: "400px",
        sm: "500px",
        md: "400px",
        lg: "460px",
        xl: "550px",
        "2xl": "580px",
      }}
      minH={{
        base: "300px",
        sm: "400px",
        md: "350px",
        lg: "430px",
        xl: "500px",
        "2xl": "400px",
      }}
      w="100%"
      position="absolute"
      zIndex={-2}
      overflow="hidden"
      lineHeight={0}
    >
      <svg
        width="1920"
        height="256"
        viewBox="0 0 1920 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_652_2563)">
          <path
            d="M1920 256V78C1900.67 65.3333 1506.4 0.5 1370 0.5C1167.5 0.5 923.5 27.5 657.5 142C455.107 229.12 211.5 227 0 217.5V256H1920Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_652_2563">
            <rect width="1920" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

export default CurvyBackground;
