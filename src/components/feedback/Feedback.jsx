import css from "./Feedback.module.css";

const Feedback = ({
  totalFeedback,
  values: { good, neutral, bad },
  positiveReviewPercentage,
}) => {
  return (
    <ul className={css.feedbackList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveReviewPercentage}%</li>
    </ul>
  );
};
export default Feedback;
