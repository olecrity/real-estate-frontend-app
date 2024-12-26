import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function CreateAppartment() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <main className="form-wrapper" style={{ maxWidth: "900px" }}>
      <h3>Add new appartment</h3>
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Заголовок" name="title">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Тип" name="type">
              <Select
                defaultValue="квартира"
                options={[
                  { value: "квартира", label: "Квартира" },
                  { value: "будинок", label: "Будинок" },
                ]}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Опис" name="description">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Кількість поверхів" name="rooms">
              <InputNumber
                controls={false}
                size="large"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Поверх" name="floor">
              <InputNumber
                controls={false}
                size="large"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Кількість поверхів у будинку" name="total_floors">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Адреса" name="location">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Тип будинку" name="category">
              <Select
                options={[
                  { value: "квартира", label: "Новобудова" },
                  { value: "стародавня будівля", label: "Стародавня будівля" },
                ]}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Опалення" name="heating">
              <Select
                options={[
                  { value: "централізоване", label: "Централізоване" },
                  { value: "автономне", label: "Автономне" },
                  { value: "індивідуальне", label: "Індивідуальне" },
                ]}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Балкон" name="balcony">
              <Select
                options={[
                  { value: "true", label: "Є" },
                  { value: "false", label: "Немає" },
                ]}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Площа" name="square">
              <InputNumber
                controls={false}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 11 }} xs={{ span: 24 }}>
            <Form.Item label="Ціна" name="price">
              <InputNumber
                controls={false}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
            <Form.Item label="Код" name="code">
              <InputNumber
                controls={false}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Upload photo" name="ProfilePicture">
          <Upload
            action={"http://localhost:5741"}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
        {previewImage && (
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
        <Row
          style={{
            margin: "15px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </main>
  );
}

export default CreateAppartment;
