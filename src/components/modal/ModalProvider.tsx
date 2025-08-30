"use client";
import React, { createContext, useContext, useState } from "react";
import { Modal, ModalBody, ModalContent } from "../ui/animated-modal";
import { Form } from "../form/form";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalBody className="w-1/2">
          <ModalContent>
            <Form />
          </ModalContent>
        </ModalBody>
      </Modal>
    </ModalContext.Provider>
  );
};
