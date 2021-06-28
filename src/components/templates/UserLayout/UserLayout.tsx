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
        <title>Nubesk</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
