import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "@organisms";
import { Container } from "@templates";
const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Nubesk</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main className="t-main">{children}</main>
    </>
  );
};

export default UserLayout;
