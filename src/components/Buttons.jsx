export default function Buttons({ getLuckyNumber }) {
  return (
    <div className="card">
      <h2>Let Fate Decide</h2>
      <button onClick={getLuckyNumber}>Click Me</button>
    </div>
  )
}  