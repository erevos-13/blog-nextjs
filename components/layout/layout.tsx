import React, { useContext } from "react";
import NotificationContext from "../../context/notification-context";
import MainHeader from "../main-header/main-header";
import Notification from "../ui/notification/notification";
const Layout: React.FC = (props) => {
    const cxtNotification = useContext(NotificationContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {cxtNotification?.toggleNotification && (
        <Notification
          title={cxtNotification?.notification.title}
          message={cxtNotification?.notification.message}
          status={cxtNotification?.notification.status}
        />
      )}
    </React.Fragment>
  );
};

export default Layout;
