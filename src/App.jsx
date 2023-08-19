import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  font-size : 30px;
  font-weight : 600;
  background-color: yellow;
`
const Button = styled.button`
  font-size : 1.4rem;
  padding : 1.2 rem 1.6rem;
  font-weight : 500;
  border : none;
  border-radius : 7px;
  background-color : var(--color-brand-500);
  color : white;
  cursor : pointer;
  margin : 20px;
`
const App = () => {
  return (
    <>
    <GlobalStyles />
    <div>
      <H1>Wild Oasis</H1>
    </div>
    </>
  )
}

export default App