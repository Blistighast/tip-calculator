import styles from "../styles/MainCard.module.css";
import BillForm from "./Billform";
import PeopleAmount from "./PeopleAmount";
import ResultsCard from "./ResultsCard";
import TipSelect from "./TipSelect";

const MainCard = () => {
  return (
    <div className={styles.card}>
      <span className={styles.span}>
        <div className={styles.top}>
          <BillForm />
          <TipSelect />
          <PeopleAmount />
        </div>
        <ResultsCard />
      </span>
    </div>
  );
};

export default MainCard;
