import { useState, useEffect } from 'react';
import { portfolioFirestore, timestamp } from '../config';


const useSendMessage = (message) => {
 const [error, setError] = useState(null);
const [feedback, setFeedback] = useState(null)

 useEffect(() => {
  //  create reference for the messages
  const messageColRef = portfolioFirestore.collection('messages');

  const createdAt = timestamp()
  messageColRef.add({ ...message, createdAt })
    .then(snap => {
      setFeedback(snap)
    })
    .catch(err => {
      setError(err)
    })
 }, [message])

 return { feedback, error }
}

export default useSendMessage;