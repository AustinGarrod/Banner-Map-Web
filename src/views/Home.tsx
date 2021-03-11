import React from 'react';
import { RouteComponentProps } from '@reach/router';

// Define props
interface Props extends RouteComponentProps
{

}

function Home({}:Props) {
  return (
    <div>
      Home!
    </div>
  );
}

export default Home;
