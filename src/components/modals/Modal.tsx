import Portal from "../portal/portal";
import classes from "./Modal.module.scss";

const Modal = () => {
  return (
    <Portal>
      <div className={classes.modal}>Modal</div>;
    </Portal>
  );
};

export default Modal;
