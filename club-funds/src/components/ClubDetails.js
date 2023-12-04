import React from "react";
import { useParams } from 'react-router-dom';
import clubDetails from "../styles/clubs.json";
import css from "../styles/ClubDetails.module.css"; 

export default function ClubDetails() {
  let { clubName } = useParams();
  const club = clubDetails.clubs.find(club => club.name === clubName);

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div className={css.clubDetailContainer}>
      <h1 className={css.clubName}>{club.name}</h1>
      <p className={css.clubDescription}>{club.description}</p>
      <div className={css.requestsContainer}>
        {club.requests.map((request, index) => (
          <div key={index} className={css.requestCard}>
            <p>{request.title}: {request.amount}</p>
            <button>Support This</button>
          </div>
        ))}
      </div>
    </div>
  );
}
