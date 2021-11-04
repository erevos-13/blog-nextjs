import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  SyntheticEvent,
  useContext,
  useRef,
  useState,
} from "react";
import useSWR from "swr";
import NotificationContext from "../../context/notification-context";
import { fetcher } from "../../fetcher";
import ButtonUi from "../ui/button/button-ui";
import styles from "./contact-form.module.css";
const ContactForm: React.FC = () => {
  const [emailIsinValid, setEmailIsInValid] = useState("");
  const [titleIsInValid, setTitleIsInValid] = useState("");
  const [messageIsInValid, setMessageIsInValid] = useState("");
  const [formIsInValid, setFormIsInValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const refEmail = useRef<HTMLInputElement>(null);
  const refTitle = useRef<HTMLInputElement>(null);
  const refMessage = useRef<HTMLTextAreaElement>(null);
  const contextNotification = useContext(NotificationContext)

  function validateField(fieldName: string, value: string) {
    switch (fieldName) {
      case "email":
        const emailIsValid = value.match(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        );
        setEmailIsInValid(emailIsValid ? "" : " is invalid");
        break;
      case "message":
        const messageValid = value.length >= 6;
        setMessageIsInValid(messageValid ? "" : "is too short");
        break;
      case "title":
        const titleIsValid = value.length > 4;
        setTitleIsInValid(titleIsValid ? "" : "is too short");
      default:
        break;
    }
  }

  const submitContactHandler = () => {
    console.log("send contact");
    setIsLoading(true);
    fetch("/api/contact/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: refEmail.current!.value,
        title: refTitle.current!.value,
        message: refMessage.current!.value,
      }),
    })
      .then((resp) => {
        console.log(resp);
        setIsLoading(false);
        contextNotification?.toggleNotificationHandler("Success", "Contact message added", 'success');
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const emailChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("email press", event.target.value);
    validateField(event.target.name, event.target.value);
  };
  const titleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("title press", event.target.value);
    validateField(event.target.name, event.target.value);
  };

  const messageChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("message press", event.target.value);
    validateField(event.target.name, event.target.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.formControls}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          ref={refEmail}
          id="email"
          type="email"
          className={emailIsinValid ? styles.isInValid : ""}
          onChange={emailChangeInput}
        />
        <div className={styles.InValidTextContainer}>
          {emailIsinValid && (
            <span className={styles.InvalidText}>{emailIsinValid}</span>
          )}
        </div>
      </div>
      <div className={styles.formControls}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          ref={refTitle}
          type="text"
          id="title"
          className={titleIsInValid ? styles.isInValid : ""}
          onChange={titleChangeInput}
        />
        <div className={styles.InValidTextContainer}>
          {titleIsInValid && (
            <span className={styles.InvalidText}>{titleIsInValid}</span>
          )}
        </div>
      </div>
      <div className={styles.formControls}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          ref={refMessage}
          id="message"
          rows={5}
          cols={10}
          className={messageIsInValid ? styles.isInValid : ""}
          onChange={messageChangeInput}
        ></textarea>
        <div className={styles.InValidTextContainer}>
          {messageIsInValid && (
            <span className={styles.InvalidText}>{messageIsInValid}</span>
          )}
        </div>
      </div>
      {!isLoading && (
        <ButtonUi
          disabled={formIsInValid}
          onClick={() => submitContactHandler()}
        >
          Submit
        </ButtonUi>
      )}
      {isLoading && <div>Sending Contact</div>}
    </form>
  );
};

export default ContactForm;
