import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
    it('should render the button with the text "Load More"', () => {
        render(<Button text="Load More"/>);
        expect.assertions(1);

        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toHaveAttribute('class', 'button');
    });
    
    it('should call function when button is clicked', () => {
        const fn = jest.fn();
        render(<Button text="Load More" onClick={fn}/>);

        const button = screen.getByRole('button', {name: /load more/i});
        
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });
    
    it('should be disabled when disabled is true', () => {
        render(<Button text="Load More" disabled={true}/>);

        const button = screen.getByRole('button', {name: /load more/i});

        expect(button).toBeDisabled();
    });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const {container} = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});