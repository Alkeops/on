import React, { createContext, useContext, ReactNode, useState } from "react";

type appContextType = {
  contactModal: boolean;
  subject: string;
  openModal: () => void;
  closeModal: () => void;
  emailSubject: (value: string) => void;
};

type Props = {
  children: ReactNode;
};

const initialState: appContextType = {
  contactModal: false,
  subject: "",
  openModal: () => {},
  closeModal: () => {},
  emailSubject: () => {},
};

const AppContext = createContext<appContextType>(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const emailSubject = (value: string) => setDescription(value);
  const value = {
    contactModal: modal,
    openModal,
    closeModal,
    subject: description,
    emailSubject,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
