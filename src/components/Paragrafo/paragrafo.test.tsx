import { render } from '@testing-library/react';
import Paragrafo from '.';


describe('<Paragrafo/>', () => {
  test('Paragrafo o componente com o texto fornecido', () => {
    const texto = 'Meu parágrafo';
    const { getByText } = render(<Paragrafo texto={texto} />);
    const paragrafoEl = getByText(texto);
    expect(paragrafoEl).toBeInTheDocument();   
  });
});