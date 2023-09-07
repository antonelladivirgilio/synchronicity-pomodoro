import { ReactNode } from "react";

type ModalProps = {
  title: string;
  openModal: boolean;
  children?: ReactNode;
  primaryAction?: () => void;
  secondaryAction?: () => void;
};

export function Modal({
  children,
  title,
  openModal,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  return (
    <>
      {openModal && (
        <dialog style={{ display: openModal ? "block" : "none" }}>
          <h1>{title}</h1>
          {children && children}

          {(primaryAction || secondaryAction) && (
            <footer>
              {primaryAction && (
                <button onClick={primaryAction}>Guardar Cambios</button>
              )}
              {secondaryAction && (
                <button onClick={secondaryAction}>Cancelar</button>
              )}
            </footer>
          )}
        </dialog>
      )}
    </>
  );
}
