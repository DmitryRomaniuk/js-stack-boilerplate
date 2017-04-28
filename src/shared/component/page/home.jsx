// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import ModalExample from '../modal-example';
import HomeTypeOverview from '../home-type-overview';
import { APP_NAME } from '../../config';
import listMotoOverview from '../../homeOverviewMotoTypes.json';

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
  motoTypesOverview: {
    color: 'white',
    backgroundColor: '#292b2c',
    border: '1px solid transparent',
  },
  motoTypesEach: {
    composes: ['row'],
    margin: '50px',
    borderBottom: '1px solid white',
    '&:last-child': {
      borderBottom: '1px solid transparent',
    },
  },
  jumbotron: {
    composes: ['jumbotron'],
    backgroundColor: '#f4f3f8',
  },
  'jumbotron-text': {
    fontFamily: 'ProximaLight',
    display: 'block',
    margin: '0 auto',
    fontSize: '1.5rem',
  },
  'jumbotron-text-banner': {
    composes: ['display-2'],
    fontFamily: 'ProximaSbold',
    display: 'block',
    margin: '0 auto',
    fontSize: '7rem',
    color: 'red',
  },
};

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className={classes.jumbotron}>
      <div className="container">
        <div className="row">
          <div className={classes['jumbotron-text']}>&mdash;&nbsp;RANGE&nbsp;&mdash;</div>
        </div>
        <div className="row">
          <div className={classes['jumbotron-text-banner']}>RIDE YOUR DREAM</div>
        </div>
        <div className="row">
          <div className={classes['jumbotron-text']}><span>In 1947 Soichiro Honda found a dream could be real. Where will you find yours?</span></div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Bootstrap</h3>
          <p>
            <button type="button" role="button" data-toggle="modal" data-target=".js-modal-example" className="btn btn-primary">Open Modal</button>
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">JSS</h3>
          <p className={classes.hoverMe}>Hover me.</p>
          <p className={classes.resizeMe}>Resize the window.</p>
          <button className={classes.specialButton}>Composition</button>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Websockets</h3>
          <p>Open your browser console.</p>
        </div>
      </div>
    </div>
    <div className={classes.motoTypesOverview}>
      <div className={classes.motoTypesEach}>
        <HomeTypeOverview type="super-sport" moto={listMotoOverview.SUPER_SPORT} />
      </div>
      <div className={classes.motoTypesEach}>
        <HomeTypeOverview type="super-touring" moto={listMotoOverview.SPORT_TOURING} />
      </div>
    </div>
    <ModalExample />
  </div>;

export default injectSheet(styles)(HomePage);
