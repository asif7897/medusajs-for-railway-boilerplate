import styled, { createGlobalStyle } from 'styled-components';

// Import the Merriweather font from Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
`;

interface ButtonProps {
  bgColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  hoverBgColor?: string;
  boxShadow?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.1)'}; /* Default to semi-transparent white */
  color: ${(props) => props.color || '#fff'};
  padding: ${(props) => props.padding || '16px 32px'}; /* Increased padding for larger button */
  border: 2px solid ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.1)'}; /* Border color matching button background */
  border-radius: ${(props) => props.borderRadius || '12px'}; /* Larger border radius for rounded corners */
  font-size: ${(props) => props.fontSize || '28px'}; /* Larger font size for a more prominent button */
  font-weight: bold; /* Bold text */
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transitions for background color and shadow */
  box-shadow: ${(props) => props.boxShadow || '0 6px 12px rgba(0, 0, 0, 0.3)'}; /* Larger shadow for 3D effect */
  backdrop-filter: blur(8px); /* Glass-like effect for added design consistency */
  text-transform: uppercase; /* Uppercase text for emphasis */
  font-family: 'Merriweather', serif; /* Merriweather font family */
  
  &:hover {
    background-color: ${(props) => props.hoverBgColor || 'rgba(255, 255, 255, 0.3)'}; /* Slightly more opaque background on hover */
    box-shadow: ${(props) => props.boxShadow || '0 8px 16px rgba(0, 0, 0, 0.4)'}; /* Larger shadow on hover */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSize ? `${parseFloat(props.fontSize) - 4}px` : '24px'}; /* Adjust font size */
    padding: ${(props) => props.padding ? `calc(${props.padding.split(' ')[0]} - 4px) calc(${props.padding.split(' ')[1]} - 8px)` : '14px 28px'}; /* Adjust padding */
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.fontSize ? `${parseFloat(props.fontSize) - 6}px` : '20px'}; /* Further adjust font size */
    padding: ${(props) => props.padding ? `calc(${props.padding.split(' ')[0]} - 8px) calc(${props.padding.split(' ')[1]} - 16px)` : '12px 24px'}; /* Further adjust padding */
  }
`;

export { Button, GlobalStyle };
