import { DividerIcon } from "@/assets";
import classes from "./style.module.scss";
import { Button } from "./buttons/Buttons";

const MainComponent = () => {
  return (
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

          <div className={classes.actionButtons}></div>
        </div>
      </div>

      <Button variant="danger">Click me</Button>
    </div>
  );
};

export default MainComponent;
