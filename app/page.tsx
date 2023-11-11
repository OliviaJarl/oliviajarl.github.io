import { Grid, GridItem } from "@chakra-ui/react";
import Introduction from "./components/Introduction";
import WorkGrid from "./components/WorkGrid";

export default function Home() {
  return (
    <>
      <Introduction />
      <WorkGrid />
    </>
  );
}
