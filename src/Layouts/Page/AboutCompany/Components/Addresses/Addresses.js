import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    <span class="border rounded color:#64748B">
      <div className="d-inline-flex flex-column gap-3 p-4">
        <div className="title">Адреса заведений</div>
        <div className="d-inline-flex flex-column gap-5 mt-4">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
        <div className="d-inline-start mt-2 py-4">
          <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
      </div>
    </span>
  );
}

export default Addresses;
