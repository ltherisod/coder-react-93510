import { useState } from "react";
import Contador from "./Contador";

const ContadorContainer = () => {
  const [ contador, setContador ] = useState(1);
  //let contador = 0;

  const aumentar = () => {
    //contador = contador + 1;
    setContador( contador + 1 )
  }

  return (
    <Contador contador={contador} aumentar={aumentar} />
  )
}

export default ContadorContainer