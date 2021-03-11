import React from 'react';
import { RouteComponentProps } from '@reach/router';

// Import components
import Map from '../components/Map'

interface Props extends RouteComponentProps
{

}

function Home({}:Props) {
  return (
    <div>
      <Map />
    </div>
  );
}

export default Home;
