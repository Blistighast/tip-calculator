function totalTipCalc(bill, tip, people) {
  const result = (bill / people) + ((bill * tip) / people)
  return (
    result.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
  )
}

export default totalTipCalc;