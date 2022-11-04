import {useState} from "react"
import { Statistics } from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Sections/Sections"
import {Notification} from "./Notification/Notification"


function App() {
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const onLeaveFeedback = e => {
        switch (e.target.dataset.active) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;
            case 'bad':
                setBad(prevState => prevState + 1)
                break;
            default:
                return
        }
    }
    const totalFeedback = good + neutral + bad
    const positiveFeedback = Math.round((good * 100) / totalFeedback)

        return (
            <>
                <Section title={'Please leave feedback'}>
                    {/* <ul>
                        <button type='button' onClick={() => setGood(good + 1)}>Good</button>
                        <button type='button' onClick={() => setNeutral(neutral + 1)}>Neutral</button>
                        <button type='button' onClick={() => setBad(bad + 1)}>Bad</button>
                    </ul> */}
                    <FeedbackOptions
                        // options={Object.keys(options)}
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback = {onLeaveFeedback}
                    />
                </Section>
                <Section title={'Statistics:'}>
                    {totalFeedback === 0
                        ? <Notification message={'There is no feedback'} />
                        :                    
                            <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={positiveFeedback}
                                />
                    }
                </Section>
                
            </>
        )
    }

 


export default App


/*class App extends React.Component{

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

 
}*/