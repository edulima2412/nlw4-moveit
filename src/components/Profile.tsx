import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/edulima2412.png" alt="Eduardo Rocha" />
      <div>
        <strong>Eduardo Rocha</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
