import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '..';

const MockFollowersList = () => {
  return(
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

it("should render follower items", async () => {
  // render(<MockFollowersList />);
//   const divEl = await screen.findByTestId('follower-item-0');
//   expect(divEl).toBeInTheDocument();
});

// it("should render multiple follower items", async () => {
//   render(<MockFollowersList />);
//   const divEls = await screen.findAllByTestId(/follower-item-/i);
//   expect(divEls.length).toBe(5);
// });