import { Button } from "antd";
import { StarOutlined } from "@ant-design/icons";

import styles from "./AddBookmarkButton.module.scss";
import { useBookmarks } from "../../contexts/BookmarksContext";

function AddBookmarkButton({ id }) {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  function handleClick() {
    bookmarks.includes(id) ? removeBookmark(id) : addBookmark(id);
  }

  return (
    <Button onClick={handleClick} type="link" className={styles["bookmark"]}>
      <span className={styles["star-icon"]}>
        <StarOutlined />
      </span>
      <span>
        {bookmarks.includes(id) ? "Видалити з закладок" : "Додати в закладки"}
      </span>
    </Button>
  );
}

export default AddBookmarkButton;
