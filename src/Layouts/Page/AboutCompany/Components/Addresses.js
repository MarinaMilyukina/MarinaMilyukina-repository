import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    <span class="border rounded color:#64748B">
      <div className="d-flex gap-5 justify-content-between mt-5">
        <div className="title">Адреса заведений</div>
        <div className="d-flex flex-column">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
        <div className="d-inline-end align-self-start mt-auto p-2 bd-highlight">
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
      </div>
    </span>
  );
}

export default Addresses;
