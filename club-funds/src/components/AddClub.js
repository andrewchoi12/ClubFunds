import React, { useState } from "react";
import css from "../styles/AddClub.module.css";

export default function AddClub() {
  return (
    <main className={css.AddClub}>
      <header>Add a New Club</header>
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

        <button type="submit" class="SubmitButton">Submit</button>
      </div>
    </main>
  );
}
