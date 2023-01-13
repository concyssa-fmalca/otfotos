import React from 'react'
import Registro from './components/Registro'
import data from './data/data'


const App = () => {
  return (
    <div className='container'>
        <div>
        <button className='btn btn-success'>Nuevo</button>
        </div>
      {
          data.map(item => (
            <div class="card">
              <div class="card-header">
                SGI: {item.sgi}
              </div>
              <div class="card-body">
                <h5 class="card-title">{item.id}</h5>
                <p class="card-text">{item.fecha}</p>
                <p class="card-text">{item.tipo}</p>
                <p class="card-text">{item.usuario}</p>
                <p class="card-text">{item.observacion}</p>
                <a href="#" class="btn btn-primary">Ver foto</a>
              </div>
            </div>
          ))

      }    

      <Registro />

    </div>
  )
}

export default App