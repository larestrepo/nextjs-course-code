import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
  const [message, setMessage] = useState("");
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      return setMessage("Please send a valid email");
    }

    const emailData = { email: email };

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((repsonse) => repsonse.json())
      .then((data) => console.log(data));

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
