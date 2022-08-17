import React from "react";
import "./LightningBox.css";

export default function LightningBox() {
  return (
    <div class="lightningbox">
      <p>
        <i class="fa-solid fa-bolt-lightning"></i> fascinated by{" "}
        <strong>lightnings</strong>? check out{" "}
        <a
          href="https://www.lightningmaps.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          lightningmaps.org{" "}
        </a>
        for real time map data of lightning and thunder{" "}
        <i class="fa-solid fa-bolt-lightning"></i>:
      </p>
    </div>
  );
}
