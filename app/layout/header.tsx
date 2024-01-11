import { Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NavMenu from "../components/NavMenu";
import { sideMargins } from "../constants";

export function Header() {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        marginTop={{ base: "10px", md: "15px" }}
        marginBottom={{ base: "10px", md: "15px" }}
        marginLeft={{
          base: sideMargins["base"],
          md: sideMargins["md"],
          lg: sideMargins["lg"],
        }}
        marginRight={{
          base: "15px",
          md: sideMargins["md"],
          lg: sideMargins["lg"],
        }}
      >
        <Link href={"/"}>
          <div>
            <Image
              src={"/header_image.svg"}
              alt="Logo image"
              align="center"
              boxSize={{ base: "40px", sm: "50px" }}
            />
          </div>
        </Link>
        <NavMenu />
      </Flex>
    </header>
  );
}
