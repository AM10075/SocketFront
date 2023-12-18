import {  Row } from "react-bootstrap";


// eslint-disable-next-line react/prop-types
export default function MainContainer({ children }) {
  return (
    <div className="m-0 p-0">
      <Row className="w-100 m-0 p-0">{children}</Row>
    </div>
  );
}
