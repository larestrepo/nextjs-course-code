import classes from "./newsletter-registration.module.css";
import { useRef, useState, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);
  const [message, setMessage] = useState("");
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      return setMessage("Please send a valid email");
    }

    notificationCtx.showNotification({
      title: "Signing up",
      message: "Registering",
      status: "pending",
    });

    const emailData = { email: email };

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something wnet wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Signing up",
          message: "Succesfully registered for newsletter!!",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "error",
          message: error.message || "something went wrong!",
          status: "error",
        });
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  if (!message) {
    return (
      <section className={classes.newsletter}>
        <h2>Sign up to stay updated!</h2>
        <form onSubmit={registrationHandler}>
          <div className={classes.control}>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              ref={emailRef}
            />
            <button>Register</button>
          </div>
        </form>
      </section>
    );
  }

  return <p>{message}</p>;
}

export default NewsletterRegistration;
