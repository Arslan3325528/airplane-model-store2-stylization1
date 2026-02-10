import PropTypes from 'prop-types';
import defaultImage from "./default.jpg" //! Дефолтне зображення


export default function Painting({
  url = defaultImage, //! Дефолтне зображення
  title,
  author = "не відомо",
  profileUrl,
  price,
  quantity
})
{
  return (
    <>
      <img src={url} alt={title} width="480" />
      <h3>{title}</h3>
      <p>Автор: <a href={profileUrl}>{author}</a></p>
      <p>Цена: {price} кредитов</p>
      {/* <p>Доступність: закінчується чи є у наявності</p> */}
      <p>Доступність: {quantity < 10 ? "закінчується" : "є у наявності"}</p>
      <button type="button">Додати до кошику</button>
    </>
  );
};

//! Контроль типу змінних - propTypes
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // price: PropTypes.string.isRequired, //! контроль propTypes
  quantity: PropTypes.number.isRequired,
};
