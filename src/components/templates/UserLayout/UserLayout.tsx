import { ReactNode, useState } from "react";
import Head from "next/head";
import { Header, Footer, FormLead } from "@organisms";
import { Button } from "@atoms";
import { Modal } from "@templates";
const UserLayout = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Nubesk</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header onClick={() => setOpenModal(true)} isOpen={openModal} />
      {openModal ? (
        <Modal onClick={() => setOpenModal(false)}>
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
