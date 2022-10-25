import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado"

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState(1)

  const mudarTela = ()=>setTela(2)
  //Statement
  switch (tela){

    case 1:
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaLogin mudarTela={mudarTela} />
      </MainContainer>
    );

  case 2:
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro mudarTelaFinal ={()=>setTela(3)}
        mudarTela = {()=>setTela(1)} />
      </MainContainer>
    );

    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado/>
        </MainContainer>
      );

  default:
    alert('Algo deu errado, retornando a pagina inicial!')
    return (
        <MainContainer >
        <GlobalStyled />
        <TelaLogin />
      </MainContainer>
    );
  }
  // return (
  //   <MainContainer >
  //     <GlobalStyled />

  //     {/* condição ? true : false   tetrnario */}
  //     {tela === 1 ? <TelaLogin /> : <TelaCadastro />}

  //   </MainContainer>
  // )
}

export default App;