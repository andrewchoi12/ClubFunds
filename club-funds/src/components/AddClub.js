import React, { useState } from "react";
import css from "../styles/AddClub.module.css";

export default function AddClub() {
  return (
    <main className="AddClub">
      <header>Add a New Club</header>
      <div class="Boxes">
        <div class="Box">
          <label for="clubName">Club Name:</label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            placeholder="Enter Club Name"
          />
        </div>

        <div class="Box">
          <label for="clubDescription">Club Description:</label>
          <textarea
            id="clubDescription"
            name="clubDescription"
            placeholder="Enter Club Description"
          ></textarea>
        </div>

        <div class="Box">
          <label for="tags">Tags:</label>
          <input type="text" id="tags" name="tags" placeholder="Enter Tags" />
        </div>

        <button type="submit" class="SubmitButton">Submit</button>
      </div>
    </main>
  );
}
