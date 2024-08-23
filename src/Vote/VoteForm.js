import classes from './VoteForm.module.css';
import { useContext, useRef } from 'react';
import Modal from '../UI/Modal';
import { v4 as uuidv4 } from 'uuid';
import VoteContext from '../store/vote-context';

const VoteForm = (props) => {
  const nameInputRef = useRef();
  const monitorInputRef = useRef();

  const voteCtx = useContext(VoteContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMonitor = monitorInputRef.current.value;

    console.log(`${enteredName} ${enteredMonitor}`);
    
    const candidate ={
        name: enteredName,
        monitor: enteredMonitor,
        id: uuidv4()
    }
    voteCtx.voteFor(candidate);
    props.onCloseForm();

    
  };
  return (
    <Modal onClick={props.onCloseForm}>
      <section className={classes.vote}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Student Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="monitor">Choose Monitor</label>
            <select id="monitor" required ref={monitorInputRef}>
              <option value="Suresh">Suresh</option>
              <option value="Deepank">Deepank</option>
              <option value="Abhik">Abhik</option>
            </select>
          </div>
          <div>
            <button type="submit">Vote</button>
            <button onClick={props.onCloseForm}>X</button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default VoteForm;
