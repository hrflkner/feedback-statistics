/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        {/* Feedback passed down as prop */}
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats feedback={feedback} />
                                    <FeedbackList
                                        feedback={feedback}
                                        handleDelete={deleteFeedback}
                                    />
                                </>
                            }
                        ></Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </>
    );
}

export default App;
