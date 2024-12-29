import { useParams } from "react-router-dom";
import { useAptFullInfo } from "../useAptFullInfo";

import styles from "./AptMain.module.scss";
import AddBookmarkButton from "../../../ui/AddBokkmarkButton/AddBookmarkButton";
import DataRow from "./DataRow/DataRow";

function AptMain() {
  const params = useParams();
  const { appartmentInfo } = useAptFullInfo(params.appartmentId);
  return (
    <div className={styles["apt-full-info-container"]}>
      <div className={styles["apt-overall-info-container"]}>
        <h2>{appartmentInfo.price} $</h2>
        <div className={styles["sq-meter-price"]}>
          За м²: {appartmentInfo.price_per_sq_meter} $
        </div>
        <AddBookmarkButton id={appartmentInfo.id} />
      </div>
      <div className={styles["apt-info-table"]}>
        <DataRow propName="Дата" propValue={`${appartmentInfo.created_date}`} />
        <DataRow propName="Адреса" propValue={`${appartmentInfo.location}`} />
        <DataRow propName="Кімнати" propValue={`${appartmentInfo.rooms}`} />
        <DataRow
          propName="Категорія"
          propValue={`${appartmentInfo.category}`}
        />
        <DataRow propName="Поверх" propValue={`${appartmentInfo.floor}`} />
        <DataRow
          propName="Кількість поверхів"
          propValue={`${appartmentInfo.total_floors}`}
        />
        <DataRow propName="Опалення" propValue={`${appartmentInfo.heating}`} />
        <DataRow propName="Площа" propValue={`${appartmentInfo.square}`} />
        <DataRow propName="Тип" propValue={`${appartmentInfo.type}`} />
      </div>
      <p className={styles["addition"]}>
        {appartmentInfo.description}. Якщо Вас цікавить саме ця пропозиція, тоді
        телефонуйте та вкажіть код менеджеру: {appartmentInfo.code}
      </p>
    </div>
  );
}

export default AptMain;
