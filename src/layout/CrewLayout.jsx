import React from 'react'
import { Outlet } from 'react-router-dom'

const CrewLayout = () => {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default CrewLayout