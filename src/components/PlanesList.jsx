import PropTypes from 'prop-types';
import Planes from './Planes';

//!💚-var.3 Для відображення локальних зображень з http://localhost:5173/airplane-model-store/ та https://arslan3325528.github.io/airplane-model-store/
// import planes from '../json/planes.json';
// import img0 from '../images/planes-actual/a-10.jpg';
// import img1 from '../images/planes-actual/b-2-comp.jpg';
// import img2 from '../images/planes-actual/f-22-comp.jpg';

// const images = [img0, img1, img2];
// for (let i = 0; i < planes.length; i++) {
//     planes[i].url.actual = images[i];
// };
//!💚-var.3 ___________________________________________________________________________________________________________________________________________


function PlanesList({ items }) {
    return (
        <ul className="Card-planes-list">
            {items.map(item =>
                <li key={item.id} className="Card-planes">
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
