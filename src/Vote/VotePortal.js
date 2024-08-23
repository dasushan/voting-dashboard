import classes from './VotePortal.module.css';
import VoteContext from '../store/vote-context';
import { useContext } from 'react';
const VotePortal = (props) => {
    const voteCtx = useContext(VoteContext);
  return (
    <section className={classes.vote}>
      <h1>Class Monitor Vote</h1>

      <div>Total Votes : {voteCtx.totalVotes}</div>
      <div className={classes.actions}>
        <button onClick={props.onShowForm}>Add New Vote</button>
      </div>
    </section>
  );
};

export default VotePortal;
