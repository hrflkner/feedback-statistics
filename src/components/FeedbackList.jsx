import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <p> No feedback available yet!</p>;
    }

    return (
        <div className="feedback-list">
            {/* Feedback Items mapped to each FeedbackItem Component as a prop */}
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default FeedbackList;
