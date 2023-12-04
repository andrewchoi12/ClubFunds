import React, { useState } from "react";
import css from "../styles/AddClub.module.css";
import { Link } from "react-router-dom";

export default function AddClub() {
  return (
    <main className={css.AddClub}>
      <header>
        <Link to="/" className={css.BackButton}>
          Back
        </Link>
        Add a New Club
      </header>
      <div class={css.Boxes}>
        <div class={css.Box}>
          <label className={css.label} htmlFor="clubName">
            Club Name:
          </label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            placeholder="Enter Club Name"
          />
        </div>

        <div class={css.Box}>
          <label className={css.label} htmlFor="clubDescription">
            Club Description:
          </label>
          <textarea
            id="clubDescription"
            name="clubDescription"
            placeholder="Enter Club Description"
          ></textarea>
        </div>

        <div class={css.Box}>
          <label className={css.label} htmlFor="tags">
            Tags:
          </label>
          <input type="text" id="tags" name="tags" placeholder="Enter Tags" />
        </div>

        <div class={css.Box}>
          <label className={css.label} htmlFor="requests">
            Funding Requests:
          </label>
          <input type="text" id="requests" name="requests" placeholder="Enter Requests" />
        </div>

        <button type="submit" class={css.SubmitButton}>Submit</button>
      </div>
    </main>
  );
}
