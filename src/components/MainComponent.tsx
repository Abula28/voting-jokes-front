import { DividerIcon } from "@/assets";
import classes from "./style.module.scss";
import { Button } from "./buttons/Buttons";
import { useState } from "react";
import Modal from "./modals/Modal";

const MainComponent = () => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [eidtableValue, setEditableValue] = useState<{
    question: string;
    answer: string;
  }>({ question: "", answer: "" });

  const handleFieldChange = (field: string, value: string) => {
    setEditableValue((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Modal
        title="Edit Joke"
        handleCancel={() => setOpenEdit(false)}
        handleOk={() => {}}
        open={openEdit}
        handleFiledChange={handleFieldChange}
        eidtableValue={eidtableValue}
      />
      <div className={classes.mainComponent}>
        <div className={classes.contentCardWrapper}>
          <div className={classes.contentCard}>
            <p className={classes.jokeNum}>Joke #123</p>

            <div className={classes.questionAnswerWrapper}>
              <p className={classes.questionAnswer}>
                {" "}
                <span>Q:</span> Some question??
              </p>
              <p className={classes.questionAnswer}>
                {" "}
                <span>A:</span> Some answer
              </p>
            </div>
          </div>

          <div className={classes.contentFooter}>
            <div className={classes.dividerWrapper}>
              <div className={classes.divider}></div>
              <img src={DividerIcon} />
              <div className={classes.divider}></div>
            </div>

            <div className={classes.actionButtons}>
              <Button variant="danger">Delete</Button>
              <Button variant="secondary" onClick={() => setOpenEdit(true)}>
                Edit
              </Button>
              <Button variant="primary">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
