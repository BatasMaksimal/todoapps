import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Item =({list})=>{
    return(
        <Row>
            <Col>{list.name}</Col>
            <Col xs={10}>   
            <Button variant="link"> Delete</Button>
            </Col>
        </Row>
    );
};
export default Item;