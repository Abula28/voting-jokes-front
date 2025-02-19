import { DividerIcon } from "@/assets";
import classes from "./style.module.scss";
import { Button } from "./buttons/Buttons";
import { useEffect, useState } from "react";
import Modal from "./modals/Modal";
import {
  useDeleteJokeReq,
  useGetJokeByIdReq,
  useGetRandomJokeReq,
  usePostJokeReq,
  usePostUnvoteJokeReq,
  usePostVoteJokeReq,
  usePutJokeReq,
} from "@/api";
import {
  NotifyError,
  NotifySuccess,
} from "./snackbar-notifications/SnackbarNotifications";
import { JokeI } from "@/types";
import { EmojiPickerIcon24 } from "@/assets/svg";

const MainComponent = () => {
  const [jokeData, setJokeData] = useState<JokeI>();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [eidtableValue, setEditableValue] = useState<{
    _id: string;
    question: string;
    answer: string;
  }>({ _id: "", question: "", answer: "" });
  const [animationClass, setAnimationClass] = useState("");
  const [showVotes, setShowVotes] = useState<boolean>(false);
  const [userVotes, setUserVotes] = useState<string[]>([]);

  const { mutate: getRandomJoke } = useGetRandomJokeReq();
  const { mutate: updateJoke, isPending: isEditLoading } = usePutJokeReq();
  const { mutate: getJoke } = useGetJokeByIdReq();
  const { mutate: createJoke, isPending: isCreateLoading } = usePostJokeReq();
  const { mutate: deleteJoke } = useDeleteJokeReq();
  const { mutate: postVote } = usePostVoteJokeReq();
  const { mutate: postUnvote } = usePostUnvoteJokeReq();

  const handleGetRandomJoke = () => {
    getRandomJoke(undefined, {
      onSuccess(data) {
        setUserVotes((prev) => {
          if (data._id === jokeData?._id) return prev;
          return [];
        });
        setJokeData(data);
      },
    });
  };

  const handleFieldChange = (field: string, value: string) => {
    setEditableValue((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditModalOpen = () => {
    setOpenEdit(true);
    setEditableValue((prev) => ({
      ...prev,
      ...jokeData,
    }));
  };

  const handleEditModalClose = () => {
    setOpenEdit(false);
    setOpenCreate(false);
    setEditableValue({ _id: "", question: "", answer: "" });
  };

  const handleEditConfirm = () => {
    if (openCreate) {
      createJoke(eidtableValue, {
        onSuccess: (e) => {
          NotifySuccess(e.message);
          setOpenCreate(false);
          handleGetRandomJoke();
          setEditableValue({ _id: "", question: "", answer: "" });
        },
        onError: (e) => {
          NotifyError(e.message);
        },
      });
      return;
    }
    updateJoke(eidtableValue, {
      onSuccess: (e) => {
        NotifySuccess(e.message);
        getJoke(eidtableValue._id, { onSuccess: (data) => setJokeData(data) });
        setOpenEdit(false);
      },
      onError: (e) => {
        console.log(e.message);
        NotifyError(e.message);
      },
    });
  };

  const handleNext = () => {
    setAnimationClass(classes.fadeOut);
  };

  const handleAnimationEnd = () => {
    if (animationClass === classes.fadeOut) {
      handleGetRandomJoke();
      setAnimationClass(classes.fadeIn);
    } else if (animationClass === classes.fadeIn) {
      setAnimationClass("");
    }
  };

  useEffect(() => {
    handleGetRandomJoke();
  }, []);

  if (!jokeData) return <>Loading...</>;

  const { _id: id, question, answer } = jokeData;

  const handleDelete = () => {
    deleteJoke(id, {
      onSuccess: (e) => {
        NotifySuccess(e.message);
        handleGetRandomJoke();
      },
      onError: (e) => {
        NotifyError(e.message);
      },
    });
  };

  const handleShowVotes = () => {
    setShowVotes(!showVotes);
  };

  const handleVote = (label: string) => {
    if (!userVotes.includes(label)) {
      postVote(
        { id, label, value: 1 },
        {
          onSuccess: () => {
            getJoke(id, { onSuccess: (data) => setJokeData(data) });
            setUserVotes((prev) => [...prev, label]);
            setShowVotes(false);
          },
          onError: (e) => {
            console.log(e);
            NotifyError("Something went wrong");
          },
        }
      );
      return;
    }
    postUnvote(
      {
        id,
        label,
      },
      {
        onSuccess: () => {
          getJoke(id, { onSuccess: (data) => setJokeData(data) });
          setUserVotes((prev) => prev.filter((e) => e !== label));
          setShowVotes(false);
        },
        onError: (e) => {
          console.log(e);
          NotifyError("Something went wrong");
        },
      }
    );
  };

  return (
    <>
      <Modal
        title="Edit Joke"
        handleCancel={handleEditModalClose}
        handleOk={handleEditConfirm}
        loading={isEditLoading || isCreateLoading}
        open={openEdit || openCreate}
        handleFiledChange={handleFieldChange}
        eidtableValue={eidtableValue}
      />
      <div className={classes.mainComponent}>
        <div className={classes.contentCardWrapper}>
          <div
            className={`${classes.contentCard} ${animationClass}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <p className={classes.jokeNum}>Joke #{id.slice(-3)}</p>
            <div className={classes.questionAnswerWrapper}>
              <div className={classes.textContentWrapper}>
                <p className={classes.contentTitle}>Question:</p>
                <p className={classes.questionAnswer}>{question}</p>
              </div>
              <div className={classes.textContentWrapper}>
                <p className={classes.contentTitle}>Answer:</p>
                <p className={classes.questionAnswer}>{answer}</p>
              </div>
            </div>
          </div>

          <div className={classes.contentFooter}>
            <div className={classes.dividerWrapper}>
              <div className={classes.divider}></div>
              <img src={DividerIcon} />
              <div className={classes.divider}></div>
            </div>

            <div className={classes.actionButtons}>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="secondary" onClick={handleEditModalOpen}>
                Edit
              </Button>
              <Button onClick={() => setOpenCreate(true)}>Create</Button>
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>

          <div className={classes.votes}>
            {jokeData.votes.map((e) => (
              <div
                className={`${classes.voteWrapper} ${
                  userVotes.includes(e.label) && classes.active
                }`}
                onClick={() => handleVote(e.label)}
              >
                <span className={classes.vote}>{e.label}</span>
                <span className={classes.voteValue}>{e.value}</span>
              </div>
            ))}
          </div>

          {showVotes && (
            <div className={classes.availableEmojis}>
              {jokeData.availableVotes.map((e) => (
                <span
                  className={`${classes.vote} ${
                    userVotes.includes(e) && classes.active
                  }`}
                  onClick={() => handleVote(e)}
                >
                  {e}
                </span>
              ))}
            </div>
          )}
          <div className={classes.emojiPicker} onClick={handleShowVotes}>
            <EmojiPickerIcon24 />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
