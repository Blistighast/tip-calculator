import { useCalcContext } from "../context/CalcContext";
import styles from "../styles/MainCard.module.css";


const BillForm = () => {
  const { bill, setBill } = useCalcContext()

  return (
    <div className={styles.bill}>
      <label className={styles.label} htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        value={bill}
        placeholder="0"
        min="0"
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
};

export default BillForm;
