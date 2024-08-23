import { useContext } from "react"
import VoteContext from "../store/vote-context"
const Candidate = () => {
    const voteCtx = useContext(VoteContext)
    const sureshVotes = voteCtx.votes.filter((vote) => {
        return vote.monitor == "Suresh"
    })
    const deepankVotes = voteCtx.votes.filter((vote) => {
        return vote.monitor == "Deepank"
    })
    const abhikVotes = voteCtx.votes.filter((vote) => {
        return vote.monitor == "Abhik"
    })

    
    return(<>
    <div>
        <h1>Suresh</h1>
        <p>Votes : {sureshVotes.length}</p>
        {sureshVotes.map((vote) => {
            return <div>{vote.name} <button onClick={() => {
                voteCtx.deleteVote(vote.id)
            }}>Delete</button></div>
        })}
    </div>
    <div>
        <h1>Deepank</h1>
        <p>Votes : {deepankVotes.length}</p>
        {deepankVotes.map((vote) => {
            return <div>{vote.name} <button onClick={() => {
                voteCtx.deleteVote(vote.id)
            }}> Delete</button></div>
        })}
    </div>
    <div>
        <h1>Abhik</h1>
        <p>Votes : {abhikVotes.length}</p>
        {abhikVotes.map((vote) => {
            return  <div>{vote.name} <button onClick={() => {
                voteCtx.deleteVote(vote.id)
            }}>Delete</button></div>
        })}

    </div>
    </>)
}

export default Candidate