import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
const inter = Inter({ subsets: ["latin"] });
//Obligatorio export por defecto dentro de pages
//en minuscula
export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing {""}
        <code className={"code"}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
