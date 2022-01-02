import React from 'react'

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({ 
  question, 
  answer, 
  callback, 
  userAnswer, 
  questionNumber, 
  totalQuestions
}) => (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}/>
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer }}/>
              </button>
          </div>
        ))}
      </div>
    </div>
  )

