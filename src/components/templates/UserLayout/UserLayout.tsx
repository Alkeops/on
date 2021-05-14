import { ReactNode } from "react";
import Head from "next/head";
import { Header, Footer } from "@organisms";
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
      <div className="t-main__pre-footer"></div>
      <Footer />
    </>
  );
};

export default UserLayout;
