import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCat }) => {
  // to filter by category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row>
      <Col sm="12" className="justify-content-center d-flex">
        {allCat.length >= 1 ? (
          allCat.map((item, i) => {
            return (
              <div key={i} className="my-2 mb-5">
                <button onClick={() => onFilter(item)} className="btn mx-2">
                  {item}
                </button>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
