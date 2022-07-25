/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        {/* Feedback passed down as prop */}
                        <Route
                            exact
                            path="/"
                            element={
                                <section className="body-layout">
                                    <section className="feedback-status">
                                        <FeedbackForm />
                                        <FeedbackStats />
                                    </section>
                                    <section className="feedback-results">
                                        <h2>Client Feedback:</h2>
                                        <FeedbackList />
                                    </section>
                                </section>
                            }
                        ></Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    );
}

export default App;
