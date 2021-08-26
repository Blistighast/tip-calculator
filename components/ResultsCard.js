import styles from "../styles/ResultsCard.module.css";
import totalTipCalc from "./../util/totalTipCalc";
import tipCalc from "./../util/tipCalc";
import { useCalcContext } from "../context/CalcContext";

const ResultsCard = () => {
  const { bill, tip, people, setBill, setTip, setPeople } = useCalcContext();

  const handleReset = () => {
    setBill("");
    setTip(0);
    setPeople("");
  };

  return (
    <div className={styles.card}>
      <div className={styles.resultsInfo}>
        <span className={styles.container}>
          <div className={styles.word}>
            <p className={styles.title}>Tip Amount</p>
            <p className={styles.person}>/ person</p>
          </div>
          <span className={styles.resultNumber}>
            {people <= 0 || (people && bill) === undefined ? (
              <p>$0.00</p>
            ) : (
              <p>${tipCalc(bill, tip, people)}</p>
            )}
          </span>
        </span>
        <span className={styles.container}>
          <div className={styles.word}>
            <p className={styles.title}>Total</p>
            <p className={styles.person}>/ person</p>
          </div>
          <span className={styles.resultNumber}>
            {people <= 0 || (people && bill) === undefined ? (
              <p>$0.00</p>
            ) : (
              <p>${totalTipCalc(bill, tip, people)}</p>
            )}
          </span>
        </span>
      </div>
      <button className={styles.button} onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default ResultsCard;
