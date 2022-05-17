import React from 'react'
import { Link } from 'react-router-dom'

const PageNoFound = () => {
  return (
    <>
        <main>
            <section>
            <h1>Págna no encontrada</h1>
            </section>
            <br />
            <button><Link to="/">Volver al home</Link></button>
        </main>
    </>
  )
}

export default PageNoFound