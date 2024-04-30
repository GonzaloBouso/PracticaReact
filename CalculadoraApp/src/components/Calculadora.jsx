
import { useState } from "react"
import "./Calculadora.css"
import "./Boton.jsx"
import Boton from "./Boton.jsx"

const Calculadora = () => {

  const [data, setData] = useState ({operacion: "", resultado:""}); 

  const handleclick = (value) => {
    setData((prevData) => ({
      ...prevData,
      operacion: prevData.operacion + value
    }));
  };
  return (
    <main>
      <span className="resultado">{data.resultado}</span>
      <span className="display">{data.operacion}</span>
      <Boton texto="C" clase="gris" handleclick={handleclick} />
      <Boton texto="+/-" clase="gris" handleclick={handleclick} />
      <Boton texto="%" clase="gris" handleclick={handleclick} />
      <Boton texto="/" clase="operacion" handleclick={handleclick} />
      <Boton texto="7" clase="numero" handleclick={handleclick} />
      <Boton texto="8" clase="numero" handleclick={handleclick} />
      <Boton texto="9" clase="numero" handleclick={handleclick} />
      <Boton texto="*" clase="operacion" handleclick={handleclick} />
      <Boton texto="4" clase="numero" handleclick={handleclick} />
      <Boton texto="5" clase="numero" handleclick={handleclick} />
      <Boton texto="6" clase="numero" handleclick={handleclick} />
      <Boton texto="-" clase="operacion" handleclick={handleclick} />
      <Boton texto="1" clase="numero" handleclick={handleclick} />
      <Boton texto="2" clase="numero" handleclick={handleclick} />
      <Boton texto="3" clase="numero" handleclick={handleclick} />
      <Boton texto="+" clase="operacion" handleclick={handleclick} />
      <Boton texto="." clase="numero" handleclick={handleclick} />
      <Boton texto="0" clase="numero" handleclick={handleclick} />
      <Boton texto="◀" clase="numero" handleclick={handleclick} />
      <Boton texto="=" clase="operacion" handleclick={handleclick} />
    </main>
  );
};

export default Calculadora