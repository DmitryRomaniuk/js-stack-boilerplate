// @flow

import React from 'react';
import Helmet from 'react-helmet';

import Message from '../../container/message';
import HelloButton from '../../container/hello-button';

type Props = {
    route: string,
}

const title = 'Hello Page';

const TypeMotocycles = ({ route }: Props) =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <h2>{route}</h2>
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>;

export default TypeMotocycles;
