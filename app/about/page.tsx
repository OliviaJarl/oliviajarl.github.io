import Image from "next/image";
import { Button } from "../components/Button";

export default function About() {
  return (
    <>
      this is the about page
      <Button />
      <Image width={200} height={200} src="/next.svg" alt="next logo" />
    </>
  );
}
