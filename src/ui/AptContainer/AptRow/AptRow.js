import { Button, Image } from "antd";
import styles from "./AptRow.module.scss";
import { useNavigate } from "react-router-dom";
import AddBookmarkButton from "../../AddBokkmarkButton/AddBookmarkButton";
import { useAuth } from "../../../contexts/AuthContext";
import { useChangeStatus } from "../../../hooks/useChangeStatus";
function AptRow({ object }) {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const { changeStatus, isChanging } = useChangeStatus(object.id);

  function handleSoldClick() {
    changeStatus(object.id);
  }

  function handleClick() {
    navigate(`/appartment/${object.id}`);
  }

  return (
    <li className={styles["apt-row"]}>
      <div className={styles["apt-full-info-container"]} onClick={handleClick}>
        <Image
          width={200}
          height={100}
          preview={false}
          src={`data:image/png;base64,   ${object.photo.image_base64}`}
          style={{ borderRadius: "5px" }}
        />
        <div className={styles["apt-text-info-container"]}>
          <div className={styles["text-info-left"]}>
            <p className={styles["date"]}>{object.created_date}</p>
            <p>{object.title}</p>
            <p>{`${object.rooms} кім.`}</p>
            <p>Площа: {object.square}</p>
            <p>Поверх: {object.floor}</p>
          </div>
          <div className={styles["text-info-right"]}>
            <p className={styles["price"]}>{object.price} $</p>
            <p className={styles["price-sq-meters"]}>
              За м²: {object.price_per_sq_meter} $
            </p>
          </div>
        </div>
      </div>
      <div className={styles["bottom-buttons-container"]}>
        <AddBookmarkButton id={object.id} />
        {isAuth && (
          <Button
            onClick={handleSoldClick}
            variant="solid"
            color="danger"
            disabled={isChanging}
          >
            Позначити як продана
          </Button>
        )}
      </div>
    </li>
  );
}

export default AptRow;
