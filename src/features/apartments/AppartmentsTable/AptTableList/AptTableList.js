import { Pagination, Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";
import { useFilters } from "../../../../contexts/FiltersContext";
import { useAppartments } from "../../../../hooks/useAppartments";
import AptContainer from "../../../../ui/AptContainer/AptContainer.js";
import styles from "./AptTableList.module.scss";
import ErrorContainer from "../../../../ui/ErrorContainer/ErrorContainer.js";
function AptTableList() {
  const { filters, dispatch } = useFilters();
  const { isLoading, appartments, error } = useAppartments(filters);

  const { page, limit } = filters;

  function handlePageChange(page, pageSize) {
    const payload = {
      page,
      limit: pageSize,
    };
    dispatch({ type: "pagination/set", payload });
  }
  if (isLoading) {
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    );
  }
  return (
    <div className={styles["apt-list-container"]}>
      {!error ? (
        <>
          <AptContainer appartments={appartments} />
          <Pagination
            defaultCurrent={1}
            current={page}
            total={appartments.total_objects}
            pageSize={limit}
            hideOnSinglePage={true}
            responsive={true}
            onChange={handlePageChange}
            pageSizeOptions={[5, 10, 20]}
          />
        </>
      ) : (
        <ErrorContainer>
          Не вдалось отримати список оголошень, будь ласка, перевірте з'єднання
          з сервером!
        </ErrorContainer>
      )}
    </div>
  );
}

export default AptTableList;
