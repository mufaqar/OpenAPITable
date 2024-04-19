"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeModal } from "@/redux/features/modalSlice";
import { ImageModal } from "../ImageModal";
import { CloseButton } from "@/components/atoms";

export const ModalProvider = () => {
  const { isOpen, name, data, props } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const allProps = {
    ...props,
    ...data,
    handleClose,
  };

  const MODALS: Record<string, React.ReactNode> = {
    IMAGE_MODAL: <ImageModal {...allProps} />,
  };
  let modal = null;
  if (name) {
    modal = MODALS[name];
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/70 z-[9999]"
          onClick={handleClose}
        />
        <Dialog.Content className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99991]">
          <div>{modal}</div>

          <div className="absolute -top-[18px] -right-[18px] z-10">
            <CloseButton onClick={handleClose} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
