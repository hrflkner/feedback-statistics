function FeedbackItem({ item }) {
    return (
        <div className="card">
            {/* Feedback data props unpacked into each div in the card */}
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    );
}

export default FeedbackItem;
