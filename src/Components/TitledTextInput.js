import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #0f172a;
  &:hover {
    background-color: #d9e2efb8;
  }
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div>{title}</div>
    ) : (
      <div className="caption color-steel-gray-400">{title}</div>
    );
  return (
    <div className="d-flex flex-column gap-2 ">
      {Title}
      <Input className="p-2 " defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
