import { Col, Collapse, Row, theme } from "antd";

import { CaretRightOutlined } from "@ant-design/icons";
import StageItem from "./StageItem/StageItem";
import styles from "./StagesWithUs.module.scss";
import QualityItem from "./QualityItem/QualityItem";

const stages = [
  {
    title: "Дзвінок",
    content: "ВИ ТЕЛЕФОНУЄТЕ НАМ АБО ЗАЛИШАЄТЕ ЗАЯВКУ",
  },
  {
    title: "КОНСУЛЬТАЦІЯ",
    content: "НАДАЄМО ДЕТАЛЬНУ КОНСУЛЬТАЦІЮ СТОСОВНО ВАШОГО ЗАПИТУ",
  },
  {
    title: "ПОШУК",
    content:
      "ОПЕРАТИВНО ЗДІЙСНЮЄМО ПОШУК І ПРОТЯГОМ 10 ХВИЛИН ПРОПОНУЄМО ВАМ ВАРІАНТИ",
  },
  {
    title: "ПРЕЗЕНТАЦІЯ",
    content:
      "ПРОВОДИМО ПРЕЗЕНТАЦІЇ ОБЄКТІВ НЕРУХОМОСТІ ТА ВЕДЕМ ПЕРЕГОВОРИ, ПРЕДСТАВЛЯЮЧИ ВАШІ ІНТЕРЕСИ",
  },
  {
    title: "ДОГОВІР",
    content: "ОРГАНІЗОВУЄМО ПРОЦЕС УКЛАДЕННЯ ДОГОВОРУ",
  },
  {
    title: "ОПЛАТА ПОСЛУГ",
    content: "ВИ ОПЛАЧУЄТЕ ОДНОРАЗОВУ КОМІСІЮ ЗА НАДАНІ НАМИ ПОСЛУГИ",
  },
];

const qualities = [
  {
    title: "ІНДИВІДУАЛЬНИЙ ПІДХІД",
    content:
      "Інтереси кожного клієнта нашої компанії на першому місці. Кожен, хто звертається в Comfort Realty, є особистістю з власними вимогами, потребами та побажаннями. Тому ми працюємо лише за принципом індивідуального підходу.",
  },
  {
    title: "КОНФІДЕНЦІЙНІСТЬ",
    content:
      "Гарантуємо абсолютну конфіденційність інформації ділового та особистого характеру, отриманої при виконанні замовлення.",
  },
  {
    title: "КОМФОРТ І ЕФЕКТИВНІСТЬ",
    content:
      "Пріоритет нашої роботи - якісне і комфортне життя наших клієнтів. Забезпечуємо умови для досягнення максимально комфортної співпраці та високої ефективності для клієнта, а саме: відповідна нерухомість, у потрібний час, у потрібному місці, належної якості, за оптимальною ціною.",
  },
  {
    title: "ОПЕРАТИВНІСТЬ",
    content:
      "Comfort Realty має власну базу обє'ктів нерухомості, що без зайвих витрат часу (без додаткових запитів та звернень), оперативно отримати актуальну онлайн-інформацію щодо попиту та пропозиції на ринку нерухомості.",
  },
  {
    title: "ФАХОВІСТЬ, ПРОФЕСІЙНІСТЬ",
    content:
      "Надаємо нашим клієнтам послуги виключно на найвищому фаховому рівні. В Comfort Realty Ви знайдете високопрофесійного та фахового ріелтора із значним досвідом роботи на ринку нерухомості.",
  },
  {
    title: "БЕЗПЕКА",
    content:
      "Допомагаємо підготувати всю необхідну документацію та звертаємо особливу увагу на безпеку укладання угод, що здійснюються за сприяння нашої компанії.",
  },
];

function StagesWithUs() {
  const { token } = theme.useToken();
  return (
    <Row>
      <Col
        span={16}
        flex={true}
        style={{
          flexWrap: "wrap",
        }}
      >
        <h1>Етапи роботи з нами</h1>
        <div className={styles["stages-container"]}>
          {stages.map((stage, index) => (
            <StageItem
              title={stage.title}
              content={stage.content}
              key={index}
            />
          ))}
        </div>
      </Col>
      <Col span={7} offset={1}>
        <h2>Працюючи з нами, Ви отримуєте:</h2>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          items={qualities.map((quality, index) => ({
            key: index,
            label: quality.title,
            children: <p>{quality.content}</p>,
            style: {
              marginBottom: 24,
              background: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              border: "none",
            },
          }))}
        />
      </Col>
    </Row>
  );
}

export default StagesWithUs;
