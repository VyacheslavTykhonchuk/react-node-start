import React, { useEffect } from 'react'

const test = async () => {
  const req = await fetch('http://localhost:8000/users')

  const res = await req.json()
}
const Test = () => {
  useEffect(() => {
    test()
  }, [])

  return <div>TestTest</div>
}

export default Test
