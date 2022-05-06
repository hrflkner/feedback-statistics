import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../shared/Card';

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            {/* Feedback data props unpacked into each div in the card */}
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.proptTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
