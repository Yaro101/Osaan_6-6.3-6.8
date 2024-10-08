import { useDispatch } from "react-redux";
import { createAnecdote } from "../features/anecdote/anecdoteSlice";
import { setNotificationWithTimout } from "../features/notification/notificationSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content !== "") {
      dispatch(createAnecdote(content));
      dispatch(setNotificationWithTimout(`New anecdote added: ${content}`, 5)); // Dispatching the notification
      event.target.anecdote.value = "";
    }
  };

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
