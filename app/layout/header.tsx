import { HStack, Image, Flex, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Link from "next/link";
import NavMenu from "../components/NavMenu";

export function Header() {
  return (
    <header>
      <Flex justifyContent="space-between" padding={{ base: 4, md: 5 }}>
        <Link href={"/"}>
          <div>
            <Image
              src="/header_image.svg"
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
