import React, { createContext, useContext, ReactNode, useState } from "react";

type appContextType = {
  contactModal: boolean;
  desc?: string;
  openModal: () => void;
  closeModal: () => void;
};

type Props = {
  children: ReactNode;
};

const initialState: appContextType = {
  contactModal: false,
  openModal: () => {},
  closeModal: () => {},
};

const AppContext = createContext<appContextType>(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const value = { contactModal: modal, openModal, closeModal };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
