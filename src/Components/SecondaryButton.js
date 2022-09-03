import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #64748b;
    min-width: ${minWidth};
    color: #64748b;
    &:hover {
      background: solid #ffffff;
      border: 1px solid #3B82F6;
      color: #64748b;
    }
    &:active {
      background: #3B82F6;
      color: #ffffff;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
