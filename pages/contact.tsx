import { NextPage } from "next";
import ContactForm from "../components/contact/contact-form";
import Notification from "../components/ui/notification/notification";
import styles from "../styles/Contact.module.css";
const ContactPage: NextPage = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
      <p>add for test</p>
      
    </div>
  );
};

export default ContactPage;
