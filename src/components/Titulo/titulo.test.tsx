import { render } from '@testing-library/react';
import Titulo from '.';

describe('<Titulo/>', () => {
  test('renderiza o componente com o texto fornecido', () => {
    const texto = 'Meu título';
    const { getByText } = render(<Titulo texto={texto} />);
    const tituloElement = getByText(texto);
    expect(tituloElement).toBeInTheDocument();   
  });
});