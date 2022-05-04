import "./styles.css";
import Btn from './boton.js';
import imageninicio from './Recursos/abstractja-4jpg.jpg';


export default function App() {
  return (
    <div className="App">
  
      <form>
      <img src={imageninicio} alt="Pintura1" title="Pintura"/>
        <div class="login-box">
          
          <h1>Ingreso de sesión</h1>

          <label htmlfor="Email"></label>
          <input id="email" name="email" type="email"  placeholder="Email"/>
          <label htmlfor="Contraseña"></label>
          <input id="contraseña" name="contraseña" type="Contraseña"  placeholder="Contraseña"/>
          
          <Btn />
          
        </div>
    </form>
        
      
    </div>
  );
}
