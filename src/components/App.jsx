import React from "react"
import { Statistics } from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Sections/Sections"
import {Notification} from "./Notification/Notification"

class App extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
    }

    onLeaveFeedback = (event) => {
        const activeBtn = event.target.dataset.active
        this.setState(prevState => ({
            [activeBtn]: prevState[activeBtn] + 1,
        }))
    }

    countTotalFeedback = ({good, neutral, bad} = this.state) => {
        return good + neutral + bad
}
   
    countPositiveFeedbackPercentage = (total) => {
        return Math.round((this.state.good * 100) / total)
    }
    
    render() {
        const totalFeedback = this.countTotalFeedback()
        const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback)
        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback = {this.onLeaveFeedback}
                    />
                </Section>
                <Section title={'Statistics:'}>
                    {totalFeedback === 0
                        ? <Notification message={'There is no feedback'} />
                        :                    
                            <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={totalFeedback}
                            positivePercentage={positiveFeedback}
                                />
                    }
                </Section>
                
            </>
        )
    }

 
}

export default App
