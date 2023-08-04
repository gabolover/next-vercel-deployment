import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
const inter = Inter({ subsets: ["latin"] });
//Obligatorio export por defecto dentro de pages
//en minuscula
export default function HomePage() {
  return (
    <MainLayout className={`${"main"} ${inter.className}`}>
      <h1>Home Page</h1>
      <h1>
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className={"description"}>
        Get started by editing {""}
        <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
