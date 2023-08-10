import Head from "next/head";
import { NavBar } from "../Navbar";
import styles from "./MainLayout.module.css";
import { Inter } from "next/font/google";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>React - Gabriel</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
