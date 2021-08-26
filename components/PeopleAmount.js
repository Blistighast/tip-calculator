import { useCalcContext } from "../context/CalcContext";
import styles from "../styles/MainCard.module.css";


const PeopleAmount = () => {
  const { people, setPeople } = useCalcContext()

  return (
    <div className={styles.people}>
      <span className={styles.title}>
        <label className={styles.label}>Number of People</label>
        {people < 1 ? <label className={styles.error}>Can&apos;t be zero</label> : ""}
      </span>
      <input
        id="people"
        type="number"
        min="1"
        value={people}
        placeholder="0"
        onChange={(e) => setPeople(e.target.value)}
        required
      />
      
    </div>
  );
};

export default PeopleAmount;
