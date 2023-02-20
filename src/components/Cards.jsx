import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Zoom from "react-reveal/Zoom";

const Cards = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item, i) => {
            return (
              <Col key={i} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row "
                  style={{ background: "#ececec" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between ">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لايوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default Cards;
