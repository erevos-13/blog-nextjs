import { createContext, useEffect, useState } from "react";
interface NotificationContextInterface {
  notification: { title: string; message: string; status: string };
  toggleNotificationHandler: (
    title: string,
    message: string,
    status: string
  ) => void;
  toggleNotification?: boolean;
}
const NotificationContext = createContext<NotificationContextInterface>({
  notification: {
    message: "",
    status: "",
    title: "",
  },
  toggleNotificationHandler: () => {},
  toggleNotification: false,
});

export const NotificationContextProvider: React.FC = (props) => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
      if(toggleNotification) {
          setTimeout(() => {
              setToggleNotification(false);
          }, 3000)
      }
      return () => {
          
      }
  }, [toggleNotification])

  function toggleNotificationHandler(
    title_: string,
    message_: string,
    status_: string
  ) {
    setStatus(status_);
    setTitle(title_);
    setMessage(message_)
    setToggleNotification((prevState) => !prevState);
  }

  const context: NotificationContextInterface = {
    notification: {
      message: message,
      status: "success",
      title: title,
    },
    toggleNotificationHandler: toggleNotificationHandler,
    toggleNotification: toggleNotification,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
