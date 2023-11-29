import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "../styles/Home.module.css";

export default function Home() {
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
            <button>Add a New Club</button>
        </div>
      </div>
      <div className={css.Boxes}>
        <h3>Featured Clubs</h3>
        <div className={css.Club}>
          <h1>BC Blockchain</h1>
          <a>Tags: Cryptocurrency, Tech, Shea Center</a>
          <h3>Who we are:</h3>
          <p>
            BC Blockchain is a student-run, educational and professional
            organization seeking to educate other students on blockchain
            technology. We incorporate hands-on learning with industry expert
            speaking engagements, educational workshops, and ongoing projects to
            market cryptocurrencies within the student body.
          </p>
          <button>Connect</button>
        </div>
        <div className={css.Club}>
          <h1>Fulton Leadership Society</h1>
          <a>Tags: Finance, CSOM, Service</a>
          <h3>Who we are:</h3>
          <p>
            The Fulton Leadership Society (FLS) in the Carroll School of
            Management aims to provide students with an opportunity to engage in
            formative experiences to develop their leadership potential,
            intellectual curiosity, and orientation to serve their community.
            FLS also adds value to the larger CSOM and Boston College
            communities through multiple outward facing initiatives.
          </p>
          <button>Connect</button>
        </div>
      </div>
    </main>
  );
}
