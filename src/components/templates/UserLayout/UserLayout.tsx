import { ReactNode, useState } from "react";
import Head from "next/head";
import { Header, Footer, FormLead } from "@organisms";
import { Modal } from "@templates";
import { useAppContext } from "@contexts/AppContext";
const UserLayout = ({ children }: { children: ReactNode }) => {
  const { contactModal, closeModal, openModal } = useAppContext();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Descripcion larga"></meta>
        <title>Nubesk</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="og:title" content="European Travel Destinations" />
        <meta
          name="og:description"
          content="Offering tour packages for individuals or groups."
        />
        <meta
          name="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta
          name="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
      </Head>
      <Header onClick={openModal} isOpen={contactModal} />
      {contactModal ? (
        <Modal onClick={closeModal}>
          <h2>Te contactamos</h2>
          <FormLead />
        </Modal>
      ) : null}
      <main className="t-main">{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
