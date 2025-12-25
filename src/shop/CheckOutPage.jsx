import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="modalcard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Payment Method</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabChange("visa")}
              >
                Visa
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                href="#"
                onClick={() => handleTabChange("paypal")}
              >
                Paypal
              </a>
            </li>

          </ul>
        </Modal.Body>
    
      </Modal>

      
    </div>
  );
};

export default CheckOutPage;
