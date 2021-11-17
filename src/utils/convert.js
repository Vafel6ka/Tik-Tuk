export default function convert(number) {
  if (number / 10000000 > 1)
    return Math.round(number / 1000000).toFixed(1) + 'M'
  if (number / 1000000 > 1) return (number / 1000000).toFixed(2) + 'M'
  if (number / 100000 > 1) return (number / 1000).toFixed(1) + 'K'
  if (number / 10000 > 1) {
    return (number / 1000).toFixed(1) + 'K'
  } else return number
}
