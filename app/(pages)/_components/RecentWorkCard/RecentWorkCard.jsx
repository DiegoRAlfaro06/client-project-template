import styles from "./RecentWorkCard.module.scss";
import Image from "next/image";

export default function RecentWorkCard(info) {
    const {
        cohort,
        imageUrl,
        client,
        description,

    } = info;

    return (
        <div className={styles.card}>
            <div className={styles.info}>
        
            <div className={styles.header}>
            <h1 className={styles.cohort}>{cohort}</h1>
            <Image 
            className={styles.image} 
            src={imageUrl} 
            alt={`${cohort} image`} 
            width={523} 
            height={300} 
            />
            </div>

            <div className={styles.text}>
            <h2 className ={styles.client}>{client}</h2>
            <p className={styles.description}>{description}</p>

            </div>
            <button className={styles.button}><div className={styles.circle}></div>VISIT SITE</button>
        </div>
        </div>
    )
}