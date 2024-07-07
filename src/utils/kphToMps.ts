export default function kphToMps(kph: number) {
  return ((kph * 1000) / 3600).toFixed(1)
}
