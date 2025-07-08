import styles from "./page.module.scss";
import RecentWorkCard from "../_components/RecentWorkCard/RecentWorkCard.jsx"
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Image
            className={styles.pen}
            src="/RecentWork/pen.png"
            alt={"Pen Icon"}
            width={80}
            height={80}
          />
          <h1 className={styles.titleText}>Recent Work</h1>
        </div>

        <p className={styles.subtitle}>Transforming ideas into incredible realities is what we do best.</p>
      </div>

      <div className={styles.cardsContainer}>
        <RecentWorkCard
          cohort="WINTER/SPRING 2023"
          imageUrl="/RecentWork/IELC.png"
          client="IELC Tutoring"
          description="Website and brand identity project for 
            the Interactive Elementary Learning Center to boost 
            credibility and increase participation in their free 
            7-week summer program."
        />

          <RecentWorkCard
          cohort="FALL/WINTER 2023"
          imageUrl="/RecentWork/Bloom&Vine.png"
          client="Bloom and Vine"
          description="Website project for Bloom and Vine a boutique 
          floral design studio located in Northern California. Bloom 
          and Vine strives to make every event unforgettable."
        />

          <RecentWorkCard
          cohort="WINTER/SPRING 2023"
          imageUrl="/RecentWork/NVSI.png"
          client="New Vietnam Studies Initiative"
          description="We developed the website for NVSI, promoting 
          research and collaboration in fields related to contemporary 
          Vietnam's economic, political, and cultural development."
        />

          <RecentWorkCard
          cohort="FALL/WINTER 2021"
          imageUrl="/RecentWork/Oneloop.png"
          client="ONELOOP"
          description="Oneloop is a team of graduate and undergraduate 
          students at UCD. They design and build a Hyperloop pod to compete 
          in SpaceX's annual Hyperloop competition."
        />

      </div>
      <h2 className ={styles.footerText}>AND MORE...</h2>
    </div>


  );
}