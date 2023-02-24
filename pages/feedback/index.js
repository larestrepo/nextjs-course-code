import { Fragment, useState } from "react";
import { getFilePath, readFile } from "../api/feedback";

function FeedbackPage(props) {
  const [feedback, setFeedback] = useState();
  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setFeedback(data.feedback)
    })
  }

    return (
      <Fragment>
          {feedback && <p>{feedback.email}</p>}
            <ul>
            {props.feedbackItems.map((item) => (
              <li key={item.id}>
                {item.text}{' '} 
                <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Feedback Detail</button>
              </li>
            ))}
          </ul>
      </Fragment>
        );

}

export async function getStaticProps() {
    const filePath = getFilePath();
    const data = readFile(filePath);
    return {
        props: {
            feedbackItems: data
        }
    };

}


export default FeedbackPage;