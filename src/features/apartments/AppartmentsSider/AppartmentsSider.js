import { Button } from "antd";
import styles from "./AppartmentsSider.module.scss";
import { useFilters } from "../../../contexts/FiltersContext";
function AppartmentsSider() {
  const { dispatch } = useFilters();
  function handleNRoomsFlatClick(rooms_min, rooms_max) {
    dispatch({ type: "filters/reset" });
    dispatch({ type: "nRoomFlat/set", payload: { rooms_min, rooms_max } });
  }

  function handleNewBuildingsClick() {
    dispatch({ type: "filters/reset" });
    dispatch({ type: "category/set", payload: "новобудова" });
  }
  function handleHousesClick() {
    dispatch({ type: "filters/reset" });
    dispatch({ type: "type/set", payload: "будинок" });
  }

  return (
    <ul className={styles["filter-list"]}>
      <li>
        <Button type="link" onClick={() => handleNRoomsFlatClick(1, 1)}>
          1-кімнатні квартири
        </Button>
      </li>
      <li>
        <Button type="link" onClick={() => handleNRoomsFlatClick(2, 2)}>
          2-кімнатні квартири
        </Button>
      </li>
      <li>
        <Button type="link" onClick={() => handleNRoomsFlatClick(3, 3)}>
          3-кімнатні квартири
        </Button>
      </li>
      <li>
        <Button type="link" onClick={() => handleNRoomsFlatClick(4, 100)}>
          Багато-кімнатні квартири
        </Button>
      </li>
      <li>
        <Button type="link" onClick={handleNewBuildingsClick}>
          Новобудови
        </Button>
      </li>
      <li>
        <Button type="link" onClick={handleHousesClick}>
          Приватні будинки
        </Button>
      </li>
    </ul>
  );
}

export default AppartmentsSider;
