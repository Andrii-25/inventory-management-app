import { useState } from "react";

export default function useModalHandlers() {
  const [isOpened, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  return [isOpened, handleOpenModal, handleCloseModal];
}
