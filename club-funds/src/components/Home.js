import React, { useState } from "react";
import { Link } from 'react-router-dom';
import css from "../styles/Home.module.css";
import clubsFile from "../styles/clubs.json";

export default function Home() {
  let clubs = clubsFile.clubs;
  /*
  let clubHTML = ``;
  for (let i in clubs) {
    clubHTML += `
    <div className={css.Club}>
          <h1>${clubs[i].name}</h1>
          <a>Tags: ${clubs[i].tags}</a>
          <h3>Who we are:</h3>
          <p>
            ${clubs[i].description}
          </p>
          <button>Connect</button>
        </div>
    `;
  }
  */
  const Club = ({ name, tags, description }) => (
    <div className={css.Club}>
      <h1>{name}</h1>
      <a>Tags: {tags}</a>
      <h3>Who we are:</h3>
      <p>{description}</p>
      <button>Connect</button>
    </div>
  );

  return (
    <main className={css.Home}>
      <header>Website Name</header>
      <div className={css.HeaderButtons}>
        <div className={css.SearchDiv}>
          <form>
            <button>Search</button>
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Find a club..."
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
