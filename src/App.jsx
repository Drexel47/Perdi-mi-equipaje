import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import sunIcon from './assets/icons/sun.svg'
import moonIcon from './assets/icons/moon.svg'
import banner from './assets/banner.png'


function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("modoOscuro") === "true";
    setModoOscuro(saved);
  }, []);

  useEffect(()=>{

    
    document.body.classList.toggle("modo-oscuro", modoOscuro);
    localStorage.setItem("modoOscuro", modoOscuro);
    
  }, [modoOscuro]);
  return (
    <>
      <div className="main">
        <header className="header">
          <nav className="navegacion-principal">
            <div className="nombre-pagina">
              <h2>Perdí mi equipaje</h2>
            </div>
            <div className="navegacion__principal">
              <a href="">Ingresa</a>
              <a href="">Registrate</a>

            </div>
            <button className='set-modo-oscuro' onClick={()=>setModoOscuro((prev)=> !prev)}>
              <img 
              src={modoOscuro ? sunIcon : moonIcon}
              alt={modoOscuro ? "Modo claro" : "Modo oscuro"}
              className="icon">

              </img>
              
            </button>
            
            
          </nav>
        </header>
        <main className="contenido-principal">
          <div className="contenedor">
            <div className="banner">
              <img className='banner-img' src={banner}></img>
              <div className="banner-desc">
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequuntur obcaecati doloribus commodi dolor qui facilis harum autem. Sit amet deleniti quos assumenda velit adipisci impedit. Praesentium dolor saepe delectus?</p>
              </div>

            </div>
            <section className="contacto">
              <h3 className="subtitulo">Tienes Dudas? Contactanos</h3>
                <form className='formulario'>
                  
                <fieldset>
                    <label >Nombre</label>
                    <input type="text"  placeholder="Nombre y Apellido"></input>
                    <label >Correo Electronico</label>
                    <input type="email" placeholder="E-mail"></input>
                    <label >Número de Contacto</label>
                    <input type="tel"></input>
                    <label >Escribe Aquí</label>
                    <input type="text" name="" id=""></input>
                    <input className="btn-primario btn-consulta" type="button" value="Enviar"></input>   
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
