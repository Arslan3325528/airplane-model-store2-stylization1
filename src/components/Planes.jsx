import PropTypes from 'prop-types';
import defaultImage from "./default.jpg"; //! Дефолтне зображення

// import { useMemo } from "react"; //!💚❌-var.2 Для відображення локальних зображень на https://arslan3325528.github.io/airplane-model-store/


export default function Planes({
  urlMain = defaultImage, //! Дефолтне зображення
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description
})
{
  //!💚❌-var.2 Для відображення локальних зображень на https://arslan3325528.github.io/airplane-model-store/
  // const actualImage = useMemo(() => {
  //   return new URL(urlActual, import.meta.url).href;
  // }, [urlActual]);
  //!💚❌-var.2 ____________________________________________________________________________________________

  return (
    <>
      <h3>{nameBrief}</h3>
      <img src={urlMain} alt={nameBrief} width="400" />
      <p>Повна назва: {nameFull}</p>
      <p>Тип: {type}</p>
      <p>Прізвисько: {nickname}</p>
      <p>Країна виробник: {country}</p>
      <p>Рік випуску: {year}</p>
      <p>Ціна: {price}</p>
      <p className="Card-planes-description">Опис: {description}</p>
      <p>Рекламна модель:</p>
      <img src={urlPromotional} alt={nameBrief} width="300" />
      <p>Реальна модель:</p>
      <img src={urlActual} alt={nameBrief} width="600" />
      {/* //!💚❌-var.2 Для відображення локальних зображень на https://arslan3325528.github.io/airplane-model-store/ */}
      {/* <img src={actualImage} alt={nameBrief} width="600" />  */}
      <br />
      <button type="button">Додати до кошику</button>
    </>
  );
};

//! Контроль типу змінних - propTypes
Planes.propTypes = {
  urlMain: PropTypes.string.isRequired,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.string.isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,  //! контроль propTypes
  description: PropTypes.string.isRequired
};
