function tipCalc(bill, tip, people) {
  const result = (bill * tip) / people
  return (
    result.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
  )
}

export default tipCalc;