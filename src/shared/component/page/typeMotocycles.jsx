// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { STATIC_PATH } from '../../config';

type Props = {
    route: string,
    motoList: Object
}

const title = 'Hello Page';

const TypeMotocycles = ({ route, motoList }: Props) =>
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
        {motoList.name}
      </div>
    </div>
    <div className="row">
      {motoList.motos.map(moto => (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2" key={moto.name}>
          <div className="item">
            <div className="row">
              <a href={route + '/' + moto.name} className="image">
                <img src={STATIC_PATH + '/img/archive/' + moto.image} alt={moto.name} height="110" />
              </a>
            </div>
            <div className="row">
              <a href={route + '/' + moto.name} className="name"><span>{moto.name}</span></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>;

export default TypeMotocycles;
