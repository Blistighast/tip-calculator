import styles from "../styles/Tip.module.css";
import { useCalcContext } from "../context/CalcContext";
import { useState } from "react";

const TipSelect = () => {
  const { tip, setTip } = useCalcContext();
  const [activeId, setActiveId] = useState(3);

  const tips = [
    { name: "5%", value: 0.05 },
    { name: "10%", value: 0.1 },
    { name: "15%", value: 0.15 },
    { name: "20%", value: 0.20 },
    { name: "50%", value: 0.5 },
  ];

  const handleClick = (e, index) => {
    setTip(e.target.value);
    setActiveId(index);
  };

  const handleCustomClick = (e) => {
    setTip(e.target.value / 100)
    setActiveId(6)
  }

  return (
    <div className={styles.tip}>
      <p>Select Tip %</p>
      <ul className={styles.tipGrid}>
        {tips.map((t, index) => {
          return (
            <button
              key={index}
              value={t.value}
              onClick={(e) => handleClick(e, index)}
              className={activeId === index ? styles.active : styles.inactive}
            >
              {t.name}
            </button>
          );
        })}
        <div className={styles.customTip}>
          <span>
            <input
              id="tip"
              type="number"
              placeholder="Custom"
              min="0"
              className={activeId === 6 ? styles.active : styles.inactive}
              onClick={(e) => handleCustomClick(e)}
              onChange={(e) => setTip(e.target.value / 100)}
            />
          </span>
        </div>
      </ul>
    </div>
  );
};

export default TipSelect;
