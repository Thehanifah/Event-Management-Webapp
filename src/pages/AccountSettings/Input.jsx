
const Input = ({label,...props}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...props}  />
    </div>
  )
}

export default Input
