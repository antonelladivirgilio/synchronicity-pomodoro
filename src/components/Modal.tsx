type ModalProps = {
  title: string
  openModal: boolean
  children?: JSX.Element
  primaryAction?: () => void
  secondaryAction?: () => void
}

export function Modal({
  children,
  title,
  openModal,
  primaryAction,
  secondaryAction
}: ModalProps) {
  return (
    <>
      {openModal && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto focus:outline-none">
          <dialog
            tabIndex={0}
            style={{ display: openModal ? 'block' : 'none' }}
            className="shadow-2xl rounded-md p-10"
          >
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
        </div>
      )}
    </>
  )
}
