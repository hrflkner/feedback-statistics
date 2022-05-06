import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p> No feedback available yet!</p>;
    }

    return (
        <div className="feedback-list">
            {/* Feedback Items mapped to each FeedbackItem Component as a prop */}
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            })
        )
    ),
};

export default FeedbackList;
