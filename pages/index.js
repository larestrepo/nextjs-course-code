import { useRef, useState } from "react";

function HomePage() {

  const emailRef = useRef();
  const feedbackRef = useRef();

  const [feedbackItems, setFeedbackItems] = useState([]);

  function submitForm(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;


    const reqBody = { email: email, text: feedback}

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));



  }

  function fetchFeedback() {
    fetch('/api/feedback')
    .then((response) => response.json())
    .then((data) => {
      setFeedbackItems(data.feedback)
    })
  }

  return (
    <div>
      <h1>Hello </h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email"> Your email address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback"> Provide your feedback</label>
          <textarea id="feedback" rows="5"  ref={feedbackRef}/>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
        <button onClick={fetchFeedback}>Fetch feedback</button>
        <ul>
          {feedbackItems.map((item) => 
          <li key={item.id}>{item.text}</li>
          )}
        </ul>
    </div>
  );
}

export default HomePage;