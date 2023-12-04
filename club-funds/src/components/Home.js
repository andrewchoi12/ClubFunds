import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import css from "../styles/Home.module.css";
import clubsFile from "../styles/clubs.json";

export default function Home() {
  
  let navigate = useNavigate();

  const initialClubs = clubsFile.clubs;
  const [clubs, setClubs] = useState(initialClubs);
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [tagSearchTerm, setTagSearchTerm] = useState("");

  const goToClubDetails = (clubName) => {
    navigate(`/clubinfo/${clubName}`);
  };

  const handleNameSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setNameSearchTerm(term);
  
    // Filter clubs based on the name search term
    const filteredClubs = initialClubs.filter((club) =>
      club.name.toLowerCase().includes(term)
    );
  
    setClubs(filteredClubs);
  };
  
  const handleTagSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setTagSearchTerm(term);
  
    // Filter clubs based on the tag search term
    const filteredClubs = initialClubs.filter((club) =>
      club.tags.toLowerCase().includes(term)
    );
  
    setClubs(filteredClubs);
  };

  const Club = ({ name, tags, description }) => (
    <div className={css.Club}>
      <h1>{name}</h1>
      <a>Tags: {tags}</a>
      <h3>Who we are:</h3>
      <p>{description}</p>
      <button onClick={() => goToClubDetails(name)}>Connect</button>
    </div>
  );

  return (
    <main className={css.Home}>
      <header>Club Connect</header>
      <div className={css.HeaderButtons}>
        <div className={css.SearchDiv}>
          <form>
            <input
              type="search"
              id="nameQuery"
              name="nameQuery"
              placeholder="Find a club by name..."
              value={nameSearchTerm}
              onChange={handleNameSearch}
            />
          </form>
          <form>
            <input
              type="search"
              id="tagQuery"
              name="tagQuery"
              placeholder="Find a club by tag..."
              value={tagSearchTerm}
              onChange={handleTagSearch}
            />
          </form>
        </div>
        <div className={css.AddClubDiv}>
            <Link to="/addclub">
              <button>Add a New Club</button>
            </Link>
        </div>
      </div>
      <div className={css.Boxes}>
        <h3>Featured Clubs</h3>
        {clubs.map((club, index) => (
          <Club
            key={index}
            name={club.name}
            tags={club.tags}
            description={club.description}
          />
        ))}
      </div>
    </main>
    );

}
