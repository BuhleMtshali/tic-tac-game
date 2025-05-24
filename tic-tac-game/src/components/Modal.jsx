import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed; top: 0; left: 0; right:0; bottom:0;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content:center; align-items:center;
`;
const Content = styled.div`
  background: var(--bg); padding:2rem; border-radius:1rem;
`;

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <Overlay onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        {children}
      </Content>
    </Overlay>
  );
}