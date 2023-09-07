import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { Clock } from "./components/Clock";
import { FormConfiguration } from "./components/FormConfiguration";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Button onClick={handleToggleModal} text="Abrir modal"></Button>

      <Clock></Clock>

      <Modal title="Configuración" openModal={openModal}>
        <FormConfiguration></FormConfiguration>
      </Modal>
    </>
  );
}

export default App;
