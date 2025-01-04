import styles from "./ErrorContainer.module.scss";

function ErrorContainer({ children }) {
  return <div className={styles["error-container"]}>{children}</div>;
}

export default ErrorContainer;
