import { Select } from "antd";
import styles from "./AptTableHeader.module.scss";
import { useAppartments } from "../../../../hooks/useAppartments";
import { useFilters } from "../../../../contexts/FiltersContext";
function AptTableHeader() {
  const { filters } = useFilters();
  const { appartments } = useAppartments(filters);
  const { dispatch } = useFilters();

  function handleSortingChange(value) {
    dispatch({ type: "sort/set", payload: value });
  }

  return (
    <div className={styles["apt-header"]}>
      <span>Всього знайдено {appartments?.total_objects} об'єктів</span>
      <div className={styles["sorting-container"]}>
        <span>Сортувати: </span>
        <Select
          onChange={handleSortingChange}
          options={[
            { value: "newest", label: "Найновіші" },
            { value: "oldest", label: "Найстаріші" },
            { value: "cheapest", label: "Найдешевші" },
            { value: "expensive", label: "Найдорожчі" },
          ]}
          defaultValue={"newest"}
        />
      </div>
    </div>
  );
}

export default AptTableHeader;
