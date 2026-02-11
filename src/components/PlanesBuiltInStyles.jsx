import PropTypes from 'prop-types';
import defaultImage from "./default.jpg"; //! Дефолтне зображення


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
  function printlActualimages(urlActual) {
    urlActual.map
  }
  return (
    <>
      <h3
        style={{
        marginBottom: 12,
        padding: "12px 16px",
        fontSize: 32,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: "yellow",
        color: "blue",
        }}
      >
        {nameBrief}
      </h3>
      <img src={urlMain} alt={nameBrief} />
      <p>Повна назва: <span></span>{nameFull}</p>
      <p>Тип: <span></span>{type}</p>
      <p>Прізвисько: <span></span>{nickname}</p>
      <p>Країна виробник: <span></span>{country}</p>
      <p>Рік випуску: <span></span>{year}</p>
      <p>Ціна: {price}</p>
      <p>Опис: <span></span>{description}</p>
      <p>Рекламна модель:</p>
      <img src={urlPromotional} alt={nameBrief} />
      <p>Реальна модель:</p>
      {/* <img src={urlActual} alt={nameBrief} width="600" /> */}
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: 'wrap',
          padding: "8px",
          borderRadius: 8,
          backgroundColor: "gray",
        }}
      >
        {urlActual.map(item =>
          <img
            src={item}
            alt={nameBrief}
            style={{
              maxWidth: "calc((100% - 10px) / 2)",
            }}
          />
        )}
      </div>
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
