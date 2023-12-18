import useChat from "../hooks/useChat";
import MainButton from "./components/MainButton";
import MainForm from "./components/MainForm";
import MainContainer from "./components/MainContainer";
import { Col, Nav } from "react-bootstrap";
export default function App() {
  let { setMessage, message, messagesList, handleSendMessage } = useChat();
  return (
    <>
      <Nav className="bg-success p-2">
        <h2 className="text-center text-white w-100">Fake Wajack</h2>
      </Nav>
      <MainContainer>
        <Col xs={3} className="px-4">
          <MainForm>
            <MainForm.Group className="mb-3" controlId="formBasicEmail">
              <MainForm.Label>Mensaje</MainForm.Label>
              <MainContainer>
                <Col xs={11} className="p-0 m-0">
                  <MainForm.Control
                    type="text"
                    placeholder="Escribe tu mensaje"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Col>
                <Col xs={1} className="p-0 m-0">
                  <MainButton onClick={handleSendMessage} variant="success">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                      width="10px"
                      height="10px"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                  </MainButton>
                </Col>
              </MainContainer>
            </MainForm.Group>
          </MainForm>
        </Col>
        <Col xs={9} className="px-4 ws-bg">
          <ul>
            {messagesList.map((messageObj, index) => (
              <p key={index} className={`p-2 my-2 rounded w-100 ${messageObj.mine ?"bg-sended":"bg-received text-end"}`}>{messageObj.message}</p>
            ))}
          </ul>
        </Col>
      </MainContainer>
    </>
  );
}
