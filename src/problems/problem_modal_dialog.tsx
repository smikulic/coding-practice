import { useState } from "react";

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
    maxWidth: "80%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

function ModalDialog({ children, title, onClose }: any) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal}>
        <h1>
          {title} <button onClick={onClose}>Close</button>
        </h1>
        {children}
      </div>
    </div>
  );
}

export function ModalDialogApp() {
  const [title, _] = useState("Modal Dialog");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {modalOpen && (
        <ModalDialog title={title} onClose={() => setModalOpen(false)}>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </ModalDialog>
      )}
    </div>
  );
}
