import React, { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ChatContact = ({ user, click }) => {
  const [isCurrent, setIsCurrent] = useState(false);

  const onClickHandler = () => {
    setIsCurrent(true);
    click(user);
  };

  return (
    <Card
      className={isCurrent ? "my-2 bg-primary" : "my-2"}
      style={{
        backgroundColor: "rgb(33,34,36)",
        cursor: "pointer",
      }}
      onClick={() => onClickHandler()}
    >
      <Card.Body>
        <Row style={{ alignItems: "center" }} nogutters="true">
          <Col>
            <Image
              src={encodeURI(`https://ui-avatars.com/api/?name=${user.name}`)}
              thumbnail
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col>
            <Card.Title className="mb-2">{user.name}</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ChatContact;
