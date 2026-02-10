import PropTypes from 'prop-types';
import Painting from "./Painting";


function PaintingList({ items }) {
    return (
        <ul className="Card-painting-list">
            {items.map(item =>
                <li key={item.id} className="Card-painting">
                    <Painting
                        url={item.url}
                        title={item.title}
                        author={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            )}
        </ul>
    );
};

PaintingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default PaintingList;
