import { Button, Spin } from "antd";
import { useBookmarks } from "../../contexts/BookmarksContext";
import AptContainer from "../../ui/AptContainer/AptContainer";
import { useBookmarksApts } from "./useBookmarksApts";

import { LoadingOutlined } from "@ant-design/icons";

import styles from "./Bookmarks.module.scss";
import ErrorContainer from "../../ui/ErrorContainer/ErrorContainer";

function Bookmarks() {
  const { bookmarks, resetBookmarks } = useBookmarks();
  const { isLoading, bookmarksApts, error } = useBookmarksApts(bookmarks);
  if (isLoading) {
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    );
  }
  return (
    <div>
      <div className={styles["bookmarks-header"]}>
        <h3>Ваші закладки ({bookmarksApts?.objects?.length})</h3>
        {bookmarksApts && bookmarksApts?.length > 0 && (
          <Button
            onClick={resetBookmarks}
            variant="solid"
            color="danger"
            size="large"
          >
            Видалити закладки
          </Button>
        )}
      </div>
      {!error ? (
        <AptContainer appartments={bookmarksApts} />
      ) : (
        <ErrorContainer>
          Не вдалось отримати закладки, будь ласка, перевірте з'єднання з
          сервером!
        </ErrorContainer>
      )}
    </div>
  );
}

export default Bookmarks;
