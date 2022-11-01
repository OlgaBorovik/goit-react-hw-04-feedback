import React from "react";
import PropTypes from 'prop-types'
import {ButtonList, Button} from "./FeedbackOptions.styled"

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <ButtonList> 
            {options.map((option) => (
                <Button
                    key={option}
                    onClick={onLeaveFeedback}
                    data-active={option}
                    type='button'>{option}
                </Button>
                )
            )}
        </ButtonList>
    )
}

FeedbackOptions.propType = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
    
}


export default FeedbackOptions