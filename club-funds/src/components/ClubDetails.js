import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import clubDetails from "../styles/clubs.json";
import css from "../styles/ClubDetails.module.css";
import { Link } from "react-router-dom";

export default function ClubDetails() {
  let { clubName } = useParams();
  const club = clubDetails.clubs.find(club => club.name === clubName);
  const [email, setSupportEmail] = useState("");

  useEffect(() => {
    // Fetch the support email address from the specific club in the JSON file
    if (club && club.email) {
      setSupportEmail(club.email);
    }
  }, [club]); // Run this effect when club changes

  if (!club) {
    return <div>Club not found</div>;
  }

  const handleSupportClick = () => {
    const subject = encodeURIComponent(`Support for ${club.name}`);
    const body = encodeURIComponent("I would like to support this club financially. Could you please provide more information about...");
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <div>
      <header>
        <Link to="/" className={css.BackButton}>
          Back
        </Link>
      </header>
      <div className={css.clubDetailContainer}>
        <h1 className={css.clubName}>{club.name}</h1>
        <p className={css.clubDescription}>{club.description}</p>
        <div className={css.requestsContainer}>
          {club.requests.map((request, index) => (
            <div key={index} className={css.requestCard}>
              <p>{request.title}: {request.amount}</p>
              <button onClick={handleSupportClick}>Support This</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
