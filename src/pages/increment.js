import React from "react"
import {
  CountProvider,
  useCountState,
  useCountDispatch,
} from "../global/context"
import { Link } from 'gatsby'


function CountDisplay() {
  const { count } = useCountState()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const dispatch = useCountDispatch()
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment count
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Increment count
      </button>
      <Link to="/">back</Link>
      
    </>
  )
}

function Increment() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default Increment
