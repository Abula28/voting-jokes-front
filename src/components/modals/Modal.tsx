import { useEffect } from "react";
import Portal from "../portal/Portal";
import classes from "./Modal.module.scss";
import { ModalProps } from "./ModalT";
import { Button } from "../buttons/Buttons";
import { useClickOutside } from "@/hooks";

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  eidtableValue,
  loading,
  handleCancel,
  handleFiledChange,
  handleOk,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const modalNode = useClickOutside(
    () => {
      handleCancel();
    },
    open ? open : false
  );

  return (
    <Portal>
      <>
        <div
          className={`${classes.backdrop} ${open ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.modal} ${open ? classes.open : ""}`}
          ref={modalNode}
        >
          <div className={classes.modalContent}>
            <h1 className={classes.title}>{title}</h1>

            <div className={classes.inputContentWrapper}>
              <div className={classes.inputContent}>
                <p className={classes.label}>Question:</p>
                <input
                  type="text"
                  onChange={(e) =>
                    handleFiledChange("question", e.target.value)
                  }
                  className={classes.inp}
                  value={eidtableValue.question}
                />
              </div>

              <div className={classes.inputContent}>
                <p className={classes.label}>Answer:</p>
                <input
                  type="text"
                  onChange={(e) => handleFiledChange("answer", e.target.value)}
                  className={classes.inp}
                  value={eidtableValue.answer}
                />
              </div>
            </div>

            <div className={classes.actionButtons}>
              <Button variant="secondary" size="small" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="small"
                onClick={handleOk}
                loading={loading}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </>
    </Portal>
  );
};

export default Modal;
