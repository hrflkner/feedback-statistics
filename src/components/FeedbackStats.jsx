// Packages
import Plot from 'react-plotly.js';
import { motion } from 'framer-motion';

import { useState, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import Card from '../shared/Card';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    const [graphType, setGraphType] = useState('bar');

    const handleClick = (type) => {
        setGraphType(type);
    };

    let average =
        feedback.reduce((acc, current) => {
            return acc + current.rating;
        }, 0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');

    let distribution = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    };
    feedback.forEach(
        (item) =>
            (distribution[item.rating] = (distribution[item.rating] || 0) + 1)
    );

    return (
        <Card>
            <div className="feedback-stats">
                <h4>{feedback.length} Reviews</h4>
                <ul className="graph-tabs">
                    <motion.li
                        onClick={() => handleClick('line')}
                        animate={{
                            background:
                                graphType === 'line' ? '#6ad0ff' : 'white',
                        }}
                    >
                        <p>Time Series</p>
                    </motion.li>
                    <motion.li
                        onClick={() => handleClick('bar')}
                        animate={{
                            background:
                                graphType === 'bar' ? '#6ad0ff' : 'white',
                        }}
                    >
                        <p>Distribution</p>
                    </motion.li>
                </ul>
                <h4>Average: {isNaN(average) ? 0 : average}</h4>
            </div>
            {graphType === 'line' ? (
                <Plot
                    data={[
                        {
                            x: feedback.map((feedback) => feedback.id),
                            y: feedback.map((feedback) => feedback.rating),
                            type: 'scatter',
                            mode: 'lines',
                            marker: { color: 'blue' },
                        },
                    ]}
                    layout={{
                        width: 600,
                        height: 400,
                        title: 'Feedback Timeline',
                        hovermode: 'closest',
                        xaxis: {
                            title: 'Time',
                            linecolor: 'black',
                            linewidth: 2,
                        },
                        yaxis: {
                            title: 'Rating',
                            linecolor: 'black',
                            linewidth: 2,
                            range: [0, 11],
                        },
                    }}
                />
            ) : (
                <Plot
                    data={[
                        {
                            x: Object.keys(distribution),
                            y: Object.values(distribution),
                            type: 'bar',
                            marker: {
                                color: '#00914b',
                                opacity: 0.6,
                                line: {
                                    color: 'black',
                                    width: 2,
                                },
                            },
                        },
                    ]}
                    layout={{
                        width: 600,
                        height: 400,
                        title: 'Feedback Distribution',
                        bargap: 0.2,
                        hovermode: 'closest',
                        border: '1px solid black',
                        xaxis: {
                            title: 'Rating',
                            linecolor: 'black',
                            linewidth: 2,
                            range: [0, 11],
                        },
                        yaxis: {
                            title: 'Frequency',
                            linecolor: 'black',
                            linewidth: 2,
                        },
                    }}
                />
            )}
        </Card>
    );
}

export default FeedbackStats;
