import React from 'react';
import { useState } from 'react';
const VoteContext = React.createContext({
  votes: [],
  voteFor: (candidate) => {},
  deleteVote: (id) => {},
  totalVotes: 0,
  setVotes: () => {},
});

export const VoteContextProvider = (props) => {
  const [votes, setVotes] = useState([]);

  const voteForCandidateHandler = (candidate) => {
    fetch('https://crudcrud.com/api/63591902bb3449e5b4ba91f2360755b7/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidate),
    }).then(async (response) => {
      const result = await response.json();
      console.log(result);
      setVotes((prevState) => {
        return [...prevState, result];
      });
    });
  };

  const deleteVoteHandler = (id) => {
    const res = votes.filter((vote) => {
      return vote.id == id;
    });
    console.log(res);
    const updatedVotes = votes.filter((vote) => {
      return vote.id !== id;
    });
    setVotes(updatedVotes);
    fetch(
      `https://crudcrud.com/api/63591902bb3449e5b4ba91f2360755b7/votes/${res[0]._id}`,
      {
        method: 'DELETE',
      }
    ).then();
  };
  const contextValue = {
    votes: votes,
    voteFor: voteForCandidateHandler,
    deleteVote: deleteVoteHandler,
    totalVotes: votes.length,
    setVotes: setVotes,
  };

  return (
    <VoteContext.Provider value={contextValue}>
      {props.children}
    </VoteContext.Provider>
  );
};

export default VoteContext;
