import styles from "./StageItem.module.scss";

function StageItem({ title, content }) {
  return (
    <div className={styles["stage-item"]}>
      <h3>{title}</h3>
      <p className={styles["content"]}>{content}</p>
    </div>
  );
}

export default StageItem;
