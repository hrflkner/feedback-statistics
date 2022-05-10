import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card>
            {/* Feedback data props unpacked into each div in the card */}
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" className="fa-x-icon" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple" className="fa-edit-icon"></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.proptTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
