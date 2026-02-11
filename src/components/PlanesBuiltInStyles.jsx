import PropTypes from 'prop-types';
import defaultImage from "./default.jpg"; //! Дефолтне зображення

//! Стилі для заголовків зображень
const imageTitles = {
  textAlign: 'center',
  color: 'blue'
}

//! Стилі для текстових полів
const textField = {
  fontSize: '18px',
  fontWeight: 700,
}

//! Стилі для значень текстових полів
const textFieldValue = {
  fontWeight: 400,
  fontStyle: "italic",
}


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
      <p style={textField}>Повна назва: <span style={textFieldValue}>{nameFull}</span></p>
      <p style={textField}>Тип: <span style={textFieldValue}>{type}</span></p>
      <p style={textField}>Прізвисько: <span style={textFieldValue}>{nickname}</span></p>
      <p style={textField}>Країна виробник: <span style={textFieldValue}>{country}</span></p>
      <p style={textField}>Рік випуску: <span style={textFieldValue}>{year}</span></p>
      <p style={textField}>Ціна: <span style={textFieldValue}>{price}</span></p>
      <p style={textField}>Опис: <span style={textFieldValue}>{description}</span></p>
      {/*//! заголовок зображень */}
      {/* <h4 style={{ textAlign: 'center', color: 'blue' }}>Рекламна модель:</h4> */}
      <h4 style={imageTitles}>Рекламна модель:</h4>
      <img src={urlPromotional} alt={nameBrief} />
      {/*//! заголовок зображень */}
      {/* <h4 style={{ textAlign: 'center', color: 'blue' }}>Реальна модель:</h4> */}
      <h4 style={imageTitles}>Реальна модель:</h4>
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
              borderRadius: 4,
            }}
          />
        )}
      </div>
      <button
        type="button"
        style={{
          height: 100,
          margin: "50px 0",
          padding: "0 30px",
          display: "inline-block",
          alignItems: "center",
          fontFmily: 'Franklin Gothic Medium, Arial Narrow',
          fontWeight: 700,
          fontSize: "2rem",
          border: "none",
          borderRadius: "12px",
          color: "#ffffff",
          cursor: "pointer",
          backgroundColor: "#008080",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
          boxShadow: "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
        }}
      >
        Додати до кошику
      </button>
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
