import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div`
  outline: none;
  border-radius: 0px;
  color: #0f172a;
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch gap-1">
      <Option className="flex-grow-2 gap-5 mt-2">{props.children}</Option>
      <EditIcon minWidth="0"> </EditIcon>
      <RemoveIcon minWidth="0"></RemoveIcon>
    </div>
  );
}

export default ListElement;
