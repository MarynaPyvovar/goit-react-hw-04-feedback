import React from "react";
import PropTypes from "prop-types";
import css from './Stats.module.css';

export const Stats = ({good, neutral, bad, total, positivePercent}) => {
    return <ul className={css.stats}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercent} %</li>
    </ul>
}

Stats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired,
}