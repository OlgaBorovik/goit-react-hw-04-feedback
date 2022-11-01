import React from "react";
import PropTypes from 'prop-types'
import {StatisticsContainer, Span} from "./Statistics.styled"


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
            <StatisticsContainer>
                <Span>Good: {good}</Span>
                <Span>Neutral: {neutral}</Span>
                <Span>Bad: {bad}</Span>
                <Span>Total feedback: {total} </Span>
                <Span>Positive feedback: {positivePercentage} % </Span>
            </StatisticsContainer>
    
    )
}


Statistics.propType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.isRequired
}