import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    // READ
    useEffect(() => {
        fetchFeedback();
    }, []);
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    };

    // DELETE
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE',
            });
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    // CREATE
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
    };

    const editFeedback = async (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    // UPDATE
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        const data = await response.json();

        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
