import PropTypes from 'prop-types';
// import Planes from './Planes'; //! 
// import Planes from './PlanesWOSyle'; //! без стилізації
import Planes from './PlanesBuiltInStyles'; //! вбудовані стилі 



function PlanesList({ items }) {
    return (
        <ul
            style={{
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                display: "grid",
                gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
                gap: 32,
                outline: "1px solid red",
            }}
        >
            {items.map(item =>
                <li
                    key={item.id}
                    style={{
                        display: "grid",
                        gap: 12,
                        padding: 10,
                        outline: "1px solid grey",
                    }}
                >
                    <Planes
                        urlMain={item.url.main}
                        urlPromotional={item.url.promotional}
                        urlActual={item.url.actual} 
                        nameBrief={item.name.brief}
                        nameFull={item.name.full}
                        nickname={item.name.nickname}
                        year={item.info.year}
                        country={item.info.country}
                        type={item.info.type}
                        price={item.info.price}
                        description={item.info.description}
                    />
                </li>
            )}
        </ul>
    );
};

PlanesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default PlanesList;
