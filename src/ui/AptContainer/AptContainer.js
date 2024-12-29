import AptRow from "./AptRow/AptRow";
import styles from "./AptContainer.module.scss";

function AptContainer({ appartments }) {
  const { objects } = appartments;
  return (
    <ul className={styles["apt-container"]}>
      {objects.map((object) => (
        <AptRow object={object} key={object.id} />
      ))}
    </ul>
  );
}

export default AptContainer;
