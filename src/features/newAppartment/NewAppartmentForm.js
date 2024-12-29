import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Upload,
} from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils/helpers";
import useCreateAppartment from "./useCreateAppartment";
const { TextArea } = Input;

function NewAppartmentForm() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const [isHouse, setIsHouse] = useState(false);

  const { isCreating, createAppartment } = useCreateAppartment();

  const onFinish = async (values) => {
    const newValues = {
      ...values,
      floor: isHouse ? 0 : values.floor,
      heating: isHouse ? "індивідуальне" : values.heating,
    };
    createAppartment({ ...newValues, photos: newValues.photos.fileList });
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
  const handleRemove = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };
  const beforeUpload = (file) => {
    setFileList([...fileList, file]);
    return false;
  };

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
    <Form
      initialValues={{
        type: "квартира",
        category: "новобудова",
        heating: "індивідуальне",
        balcony: "false",
      }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col md={{ span: 11 }} xs={{ span: 24 }}>
          <Form.Item
            label="Заголовок"
            name="title"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть заголовок!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
          <Form.Item
            label="Тип оселі"
            name="type"
            rules={[
              {
                required: true,
                message: "Будь ласка, виберіть тип оселі!",
              },
            ]}
          >
            <Select
              defaultValue="квартира"
              options={[
                { value: "квартира", label: "Квартира" },
                { value: "будинок", label: "Будинок" },
              ]}
              size="large"
              onChange={(value) => setIsHouse(value === "будинок")}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            label="Опис"
            name="description"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть опис!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 11 }} xs={{ span: 24 }}>
          <Form.Item
            label="Кількість кімнат"
            name="rooms"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть кількість кімнат!",
              },
            ]}
          >
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
          <Form.Item
            label="Поверх"
            name="floor"
            rules={[
              {
                required: !isHouse,
                message: "Будь ласка, введіть номер поверху!",
              },
            ]}
          >
            <InputNumber
              controls={false}
              size="large"
              style={{
                width: "100%",
              }}
              disabled={isHouse}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 11 }} xs={{ span: 24 }}>
          <Form.Item
            label="Кількість поверхів у будинку"
            name="total_floors"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть  кількість поерхів у будинку!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
          <Form.Item
            label="Адреса"
            name="location"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть адресу!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 11 }} xs={{ span: 24 }}>
          <Form.Item
            label="Тип будинку"
            name="category"
            rules={[
              {
                required: true,
                message: "Будь ласка, виберіть тип будинку!",
              },
            ]}
          >
            <Select
              defaultValue="новобудова"
              options={[
                { value: "новобудова", label: "Новобудова" },
                { value: "стародавня будівля", label: "Стародавня будівля" },
              ]}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
          <Form.Item
            label="Тип опалення"
            name="heating"
            rules={[
              {
                required: true,
                message: "Будь ласка, виберіть тип опалення!",
              },
            ]}
          >
            <Select
              defaultValue="індивідуальне"
              options={[
                { value: "централізоване", label: "Централізоване" },
                { value: "автономне", label: "Автономне" },
                { value: "індивідуальне", label: "Індивідуальне" },
              ]}
              size="large"
              disabled={isHouse}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 11 }} xs={{ span: 24 }}>
          <Form.Item
            label="Балкон"
            name="balcony"
            rules={[
              {
                required: true,
                message: "Будь ласка, виберіть чи є балкон",
              },
            ]}
          >
            <Select
              defaultValue="false"
              options={[
                { value: "true", label: "Є" },
                { value: "false", label: "Немає" },
              ]}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
          <Form.Item
            label="Площа"
            name="square"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть площу!",
              },
            ]}
          >
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
          <Form.Item
            label="Ціна"
            name="price"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть ціну!",
              },
            ]}
          >
            <InputNumber
              controls={false}
              style={{ width: "100%" }}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col md={{ span: 11, offset: 2 }} xs={{ span: 24 }}>
          <Form.Item
            label="Код оселі"
            name="code"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть код оселі!",
              },
            ]}
          >
            <InputNumber
              controls={false}
              style={{ width: "100%" }}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Фото оселі"
        name="photos"
        rules={[
          {
            required: true,
            message: "Будь ласка, завантажте фото!",
          },
        ]}
      >
        <Upload
          onRemove={handleRemove}
          beforeUpload={beforeUpload}
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
      <Row>
        <Col span={24}>
          <Space style={{ display: "flex", justifyContent: "end" }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={isCreating}
            >
              Submit
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
}

export default NewAppartmentForm;
