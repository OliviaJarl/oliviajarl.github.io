import Link from "next/link";

export default function Home() {
  return (
    <main>
      Go To About page <Link href={"/about"}> Click here </Link>
    </main>
  );
}
