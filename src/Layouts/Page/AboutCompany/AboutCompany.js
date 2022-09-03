import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
  return (
    <div>
      <div className=""></div>
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className="d-flex flex-row d-flex gap-5 mt-5">
        <General /> {/* Основная информация вроде названия, типа и телефона */}
        <Addresses /> {/* Список доступных адресов заведений */}
      </div>
    </div>
  );
}

export default AboutCompany;