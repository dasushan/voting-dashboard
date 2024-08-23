import MainNavigation from './Layout/MainNavigation';
import VotePortal from './Vote/VotePortal';
import VoteForm from './Vote/VoteForm';
import { useState, useEffect, useContext } from 'react';
import Candidate from './Candidate/Candidate';
import VoteContext from './store/vote-context';
function App() {
  const voteCtx = useContext(VoteContext);
  useEffect(()=> {
    fetch('https://crudcrud.com/api/63591902bb3449e5b4ba91f2360755b7/votes', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(async (response) => {
      const result = await response.json();
      console.log(result)
      if(response.ok && result.length > 0){
        voteCtx.setVotes(result)
      }
    })
  }, [])
  const [formIsShown, setFormIsShown] = useState(false);
  const showFormHandler = () => {
    setFormIsShown(true);
  };
  const closeFormHandler = () => {
    setFormIsShown(false);
  };
  return (
    <div>
      <MainNavigation />
      <VotePortal onShowForm={showFormHandler} />
      {formIsShown && <VoteForm onCloseForm={closeFormHandler} />}
      <Candidate />
    </div>
  );
}

export default App;
