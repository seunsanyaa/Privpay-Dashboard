import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";




const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    } ;

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <a href="#" onClick={handleCloseClick}>
                     <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.2267 20.7733C11.9733 20.7733 11.72 20.68 11.52 20.48C11.1333 20.0933 11.1333 19.4533 11.52 19.0666L19.0667 11.52C19.4533 11.1333 20.0933 11.1333 20.48 11.52C20.8667 11.9066 20.8667 12.5466 20.48 12.9333L12.9333 20.48C12.7467 20.68 12.48 20.7733 12.2267 20.7733Z' fill='%23292D32'/%3E%3Cpath d='M19.7733 20.7733C19.52 20.7733 19.2667 20.68 19.0667 20.48L11.52 12.9333C11.1333 12.5466 11.1333 11.9066 11.52 11.52C11.9067 11.1333 12.5467 11.1333 12.9333 11.52L20.48 19.0666C20.8667 19.4533 20.8667 20.0933 20.48 20.48C20.28 20.68 20.0267 20.7733 19.7733 20.7733Z' fill='%23292D32'/%3E%3Cpath d='M20 30.3332H12C4.76001 30.3332 1.66667 27.2398 1.66667 19.9998V11.9998C1.66667 4.75984 4.76001 1.6665 12 1.6665H20C27.24 1.6665 30.3333 4.75984 30.3333 11.9998V19.9998C30.3333 27.2398 27.24 30.3332 20 30.3332ZM12 3.6665C5.85334 3.6665 3.66667 5.85317 3.66667 11.9998V19.9998C3.66667 26.1465 5.85334 28.3332 12 28.3332H20C26.1467 28.3332 28.3333 26.1465 28.3333 19.9998V11.9998C28.3333 5.85317 26.1467 3.6665 20 3.6665H12Z' fill='%23292D32'/%3E%3C/svg%3E%0A"/>
                    </a>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalBody = styled.div`

`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 520px;
  height: 420px;
  border-radius: 15px;
  padding: 18px;
  padding-left:3.5em;
  padding-right:3.5em;

`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:4000
`;

export default Modal;