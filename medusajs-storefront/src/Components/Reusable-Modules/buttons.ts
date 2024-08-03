import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  hoverBgColor?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || '#007bff'};
  color: ${(props) => props.color || '#fff'};
  padding: ${(props) => props.padding || '10px 20px'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '5px'};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#0056b3'};
   
  }
`;
export { Button }
