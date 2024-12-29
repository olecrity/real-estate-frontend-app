import { Col, Divider, Row } from "antd";
import AppartmentsHeader from "./AppartmentHeader/AppartmentsHeader";
import AppartmentsFilter from "./AppartmentsFilter/AppartmentsFilter";
import AppartmentsTable from "./AppartmentsTable/AppartmentsTable";
import React from "react";
import AppartmentsSider from "./AppartmentsSider/AppartmentsSider";
import { FiltersProvider } from "../../contexts/FiltersContext";

function Appartments() {
  return (
    <FiltersProvider>
      <Row>
        <Col span={22} offset={1}>
          <AppartmentsHeader />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6 }} xs={{ span: 24 }}>
          <AppartmentsSider />
        </Col>
        <Col lg={{ span: 16, offset: 1 }} span={22} offset={1}>
          <AppartmentsFilter />
          <Divider />
          <AppartmentsTable />
        </Col>
      </Row>
    </FiltersProvider>
  );
}

export default Appartments;
