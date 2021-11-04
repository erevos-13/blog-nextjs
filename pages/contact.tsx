import { NextPage } from "next";
import ContactForm from "../components/contact/contact-form";
import Notification from "../components/ui/notification/notification";
import styles from "../styles/Contact.module.css";
const ContactPage: NextPage = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
      
    </div>
  );
};

export default ContactPage;
