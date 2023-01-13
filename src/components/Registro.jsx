import React from 'react'

const Registro = () => {
  return (
    <div>
        <form>
            <input type="text" value="Orden de trabajo" />
            <select>
                <option>Etapa 1</option>
                <option>Etapa 2</option>
                <option>Etapa 3</option>
                <option>Etapa 4</option>
            </select>
            <textarea>Hola mundo</textarea>
            <input type="text" value="adafd" />
            <button type="submit">Grabar</button>
        </form>
    </div>
  )
}

export default Registro