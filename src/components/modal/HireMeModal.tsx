"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";

import { Form } from "../form/form";

export function HireMeModal() {
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" text-white flex justify-center group/modal-btn bg-[linear-gradient(to_right,#8b5cf6cc_0%,#8b5cf6cc_25%,#3b82f6cc_50%,#06b6d4cc_75%,#8b5cf6cc_100%)]">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Hire Me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🤝🏻
          </div>
        </ModalTrigger>
        <ModalBody className="w-1/2">
          <ModalContent>
            <Form />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
