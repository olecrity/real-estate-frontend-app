import { Button, Col, Form, InputNumber, Row, Select } from "antd";
import styles from "./AppartmentsFilter.module.scss";
import { useState } from "react";
import { useFilters } from "../../../contexts/FiltersContext";

function AppartmentsFilter() {
  const { filters, dispatch } = useFilters();
  console.log(Number(filters.rooms_max), +filters.rooms_min);

  function handleFinish(values) {
    dispatch({ type: "filters/set", payload: values });
  }
  function handleReset() {
    dispatch({ type: "filters/reset" });
  }
  return (
    <div>
      <Form
        className={`${styles["filter-form"]} form-shadow`}
        onFinish={handleFinish}
      >
        <Row>
          <Col span={4}>
            <Form.Item name="floor_min">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Поверх від"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="square_min">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Площа від"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="rooms_min">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Кімнат від"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="price_min">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Ціна від"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="type">
              <Select
                options={[
                  { value: "", label: "Будь який" },
                  { value: "квартира", label: "Квартира" },
                  { value: "будинок", label: "Будинок" },
                ]}
                style={{ width: "100%" }}
                controls={false}
                placeholder="Тип оселі"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
            <Form.Item name="floor_max">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Поверх до"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="square_max">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Площа до"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="rooms_max">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Кімнат до"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="price_max">
              <InputNumber
                style={{ width: "100%" }}
                controls={false}
                placeholder="Ціна до"
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item name="category">
              <Select
                options={[
                  { value: "", label: "Будь який" },
                  { value: "новобудова", label: "Новобудова" },
                  { value: "Стародавня будівля", label: "Стародавня будівля" },
                ]}
                style={{ width: "100%" }}
                controls={false}
                placeholder="Тип будинку"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col offset={13} span={5}>
            <Button
              type="default"
              variant="solid"
              color="danger"
              htmlType="reset"
              size="large"
              style={{ width: "100%" }}
              onClick={handleReset}
            >
              Очистити
            </Button>
          </Col>
          <Col offset={1} span={5}>
            <Button
              color="primary"
              variant="solid"
              type="default"
              htmlType="submit"
              size="large"
              style={{ width: "100%" }}
            >
              Пошук
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AppartmentsFilter;
