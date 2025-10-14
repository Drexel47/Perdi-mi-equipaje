import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <header className="header">
          <nav className="navegacion-principal">
                
            <div className="nav-opc">
              <a href="">Ingresa</a>
              <a href="">Registrate</a>
            
            </div>
          </nav>
        </header>
        <main className="contenido-principal">
          <div className="contenedor">
            <section className="banner">
              <div className="banner-texto">
                <h2>Perdí mi equipaje</h2>
              </div>
              <div className="banner-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequuntur obcaecati doloribus commodi dolor qui facilis harum autem. Sit amet deleniti quos assumenda velit adipisci impedit. Praesentium dolor saepe delectus?</p>
              </div>

            </section>
            <section className="contacto">
              <h3 className="subtitulo">Tienes Dudas? Contactanos</h3>
                <form>
                  <fieldset>
                    <label >Nombre</label>
                    <input type="text" placeholder="Nombre y Apellido"></input>
                    <label >Correo Electronico</label>
                    <input type="email" placeholder="E-mail"></input>
                    <label >Número de Contacto</label>
                    <input type="tel"></input>
                    <label >Escribe Aquí</label>
                    <input type="text" name="" id=""></input>

                        <input type="button" value="Enviar"></input> 



                  </fieldset>


                </form>
            </section>

          </div>

        </main>
        
        <footer className="footer">Todos los Derechos Reservados. 2024</footer>
      </div>
    </>
  )
}

export default App
