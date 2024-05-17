import { useState } from "react";
import BtnAdicionar from "./componentes/BtnAdicionar";
import Visor from "./componentes/visor";
import BtnSubtrair from "./componentes/BtnSubtrair";

function App() {
  const [valorInicial, setValorInicial] = useState(0)

  const incrementarValor = () => {
    setValorInicial(valorInicial + 1)
  }

  const subtrairValor = () => {
    setValorInicial(valorInicial - 1)
  }

  return (

    <div className="App">
      <Visor valor={valorInicial} />
      <BtnAdicionar aoAlterar={incrementarValor} />
      <BtnSubtrair aoAlterar={subtrairValor} />
    </div>
  );
}

export default App;
