import { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { Header, Footer, FormLead } from "@organisms";
import { Modal } from "@templates";
import { useAppContext } from "@contexts/AppContext";
import classNames from "classnames";
const UserLayout = ({ children }: { children: ReactNode }) => {
  const [isEnd, setIsEnd] = useState(true);
  const { contactModal, closeModal, openModal } = useAppContext();

  const prefix: string = "t-loading";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-entry": isEnd,
    "is-leave": !isEnd,
  });
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/assets/img/favicon.png" />
        <meta property="og:title" content="Nubesk" />
        <meta
          property="og:description"
          content="Una herramienta para organizar, adaptar, renombrar y compartir fotos de tus productos"
        />
        <meta property="og:image" content="/assets/img/img.png" />
        <meta property="og:url" content="https://www.nubesk.com.mx" />
        <meta name="twitter:card" content="/assets/img/img.png" />
        <title>Nubesk</title>
      </Head>
      <Header onClick={openModal} isOpen={contactModal} />
      {contactModal ? (
        <Modal onClick={closeModal}>
          <h2>Te contactamos</h2>
          <FormLead />
        </Modal>
      ) : null}
      <div className={classForComponent}></div>
      <main className="t-main">{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
