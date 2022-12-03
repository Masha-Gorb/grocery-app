export  const getWithWeight = (weight: number) => {
  const w = weight > 1000 ? weight / 1000 : weight
  const measure = weight > 1000 ? 'кг' : "гр"
  return {
    weight:w,
    measure
  }
}