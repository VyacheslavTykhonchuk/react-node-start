import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const test = async () => {
  const req = await fetch('http://localhost:5000/users')
  const res = await req.json()
  console.log({
    res,
  })
  return JSON.stringify(res)
}

const Test = () => {
  const [label, setLabel] = useState('Nothing to see here...')

  const clickHandler = async () => setLabel(await test())

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography align="center" color="primary">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={clickHandler}>
          Send
        </Button>
      </Grid>
    </Grid>
  )
}

export default Test
