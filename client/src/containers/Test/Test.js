import React, { useEffect } from 'react'

const test = async onSuccess => {
  const req = await fetch('http://localhost:5000/users')
  const res = await req.json()
  onSuccess(JSON.stringify(res))
}
const Test = () => {
  const [label, setLabel] = useState('Load')

  useEffect(() => {
    test(setLabel)
  }, [])

  return <div>{label}</div>
}

export default Test
