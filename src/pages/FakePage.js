import { Button, Form, Image, Upload } from "antd";
import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function FakePage() {
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState("");
  // const [fileList, setFileList] = useState([]);
  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  // };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  // const uploadButton = (
  //   <button
  //     style={{
  //       border: 0,
  //       background: "none",
  //     }}
  //     type="button"
  //   >
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </button>
  // );
  async function handleSend() {
    const photos = document.getElementById("file-input").files;
    console.log(photos);
    const formData = new FormData();

    // Додаємо текстові поля
    formData.append("title", "Example Title");
    formData.append("price", "120000");
    formData.append("square", "85");
    formData.append("rooms", "3");
    formData.append("total_floors", "5");
    formData.append("location", "Example Location");
    formData.append("category", "Apartment");
    formData.append("heating", "Central");
    formData.append("code", "123456");
    formData.append("type", "Sell");

    // Додаємо опціональні поля
    formData.append("description", "A beautiful apartment");
    formData.append("balcony", "true");
    formData.append("floor", "2");
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    const token = localStorage.getItem("token");
    const res = await fetch(
      "http://localhost:5000/admin/add-object-with-photos",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }

    console.log(data);
  }

  return (
    <div>
      {/* <Form
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Form.Item label="Upload photo" name="ProfilePicture">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form> */}

      <label>file</label>
      <input id="file-input" type="file"></input>
      <button onClick={handleSend}>SEND</button>
    </div>
  );
}

export default FakePage;
