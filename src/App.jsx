import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import sunIcon from './assets/icons/sun.svg'
import moonIcon from './assets/icons/moon.svg'
import banner from './assets/banner.png'
import FAQItem from './components/FAQItem.jsx'
import { scrollToId } from "./utils/animate"




function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [inicio, setInicio] = useState(false);

  useEffect(()=>{
    const setScroll = () => {
      setInicio(window.scrollY > 250);
    }

    window.addEventListener("scroll", setScroll);

    return () => window.removeEventListener("scroll", setScroll);
  }, []);

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
      <AnimatePresence>
        {setInicio && (
          <motion.button
            key="setInicio"
            className="btn-scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => scrollToId("#inicio")}
          >
            ⬆
          </motion.button>
        )}
      </AnimatePresence>
      <div id="inicio" className="main">
        <header className="header">
          <nav className="navegacion-principal">
            <div className="nombre-brand">
              <h2>Perdí mi equipaje</h2>
            </div>
            <div className="navegacion__principal">
              <a onClick={() => scrollToId("#como-funciona")}>Cómo funciona</a>
              <a onClick={() => scrollToId("#documentos")}>Documentos</a>
              <a onClick={() => scrollToId("#reclamo")}>Generar reclamo</a>
              <a onClick={() => scrollToId("#faq")}>FAQ</a>

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
            <section className="hero">
              
              <div className="hero__text">
                <h1>¿Tu equipaje no llegó o fue extraviado?</h1>
                <p>Te guiamos paso a paso para recuperar tu maleta o recibir una compensación si lo anterior no se concreta.</p>
              </div>
              <div className="hero__botones">
                  <a onClick={() => scrollToId("#reclamo")} className="btn-primario">Iniciar reclamo</a>
                  <a onClick={() => scrollToId("#como-funciona")}className="btn-secundario">Ver cómo funciona</a>

              </div>
              <div className="hero__img">
                <img className='banner-img' src={banner}></img>
              </div>
              
            </section>

            <section id="como-funciona" className="seccion como-funciona">
              <h3 className="subtitulo">Cómo funciona</h3>
              <div className="cards">
                <div className="card">
                  <h4>Paso 1: Completa tu reporte</h4>
                  <p>Ingresa los datos de tu vuelo y del equipaje perdido.</p>
                </div>
                <div className="card">
                  <h4>Paso 2: Revisión del caso</h4>
                  <p>Corroborramos la información y te brindamos asistencia en el proceso.</p>
                </div>
                <div className="card">
                  <h4>Paso 3: Presentación del reclamo</h4>
                  <p>Te ayudamos a gestionar la reclamación ante la aerolínea.</p>
                </div>
              </div>
            </section>

             <section id="documentos" className="seccion documentos">
              <h3 className="subtitulo">Documentos necesarios</h3>

              <div className="cards">
                <div className="card">
                  <h4>Tarjeta de embarque</h4>
                </div>
                <div className="card">
                  <h4>Etiqueta de equipaje</h4>
                </div>
                <div className="card">
                  <h4>PIR (Parte de Irregularidad)</h4>
                </div>
              </div>

              <p className="nota">
                ¿No tienes alguno? No te preocupes, igual podemos ayudarte.
              </p>
            </section>
            <section className="seccion info-legal">
              <h3 className="subtitulo">Plazos legales</h3>

              <ul className="legal-list">
                <li><strong>Equipaje dañado:</strong> Reclamar dentro de 7 días.</li>
                <li><strong>Equipaje demorado:</strong> La aerolínea tiene 21 días para encontrarlo.</li>
                <li><strong>Equipaje perdido:</strong> Desde el día 21 puedes exigir indemnización.</li>
              </ul>
            </section>

            <section id="reclamo"className="seccion contacto">
              <h3 className="subtitulo">Generar reclamo</h3>
                <form className='formulario'>
                  
                <fieldset>
                    <label >Nombre</label>
                    <input type="text"  placeholder="Nombre y Apellido"></input>
                    <label >Correo Electronico</label>
                    <input type="email" placeholder="E-mail"></input>
                    <label >Número de Contacto</label>
                    <input type="tel" placeholder="+12 34567890"></input>
                    <label>Descripción del caso</label>
                    <textarea placeholder="Cuéntanos qué ocurrió"></textarea>
                    <input className="btn-primario btn-consulta" type="button" value="Enviar"></input>   
                </fieldset>    
                </form>
            </section>

            <section id="faq" className="seccion faq">
              <FAQItem
                pregunta="¿Cuánto tiempo tengo para reclamar?"
                respuesta="Depende del caso: 7 días por daños, 21 días por demora."
              />

              <FAQItem
                pregunta="¿Qué pasa si la aerolínea no responde?"
                respuesta="Puedes exigir compensación según normativa vigente."
              />

              <FAQItem
                pregunta="¿Puedo reclamar sin el PIR?"
                respuesta="Sí, aunque puede ser más lento. Te guiamos en cómo obtenerlo."
              />
            </section>

          </div>

        </main>
        
        <footer className="footer">
          <p>Todos los derechos reservados, 2025</p>
          <p className="disclaimer">
            Sitio independiente. No pertenecemos a ninguna aerolínea.
          </p>
        
        
        </footer>
      </div>
    </>
  )
}

export default App
