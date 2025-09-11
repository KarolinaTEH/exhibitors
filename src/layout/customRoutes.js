import React from 'react';
import { Route } from 'react-router-dom';

import Configuration from '../views/configuration';
// import Rewards from '../views/rewards';

import {default as Ranking, RankingIcon} from '../views/ranking';
import {default as Logistics, LogisticsIcon} from '../views/logistics'
import {default as Promote, PromoteIcon} from '../views/promote'
import {ScanTutorial, ScanIcon} from '../views/scans'
import Delivery from '../views/delivery';
import MesseShop from '../views/messeshop';
import Parking from '../views/parking';
import TechnicalGuidelines from '../views/technicalguidelines';
import Speaking from '../views/speaking';

export default [
  <Route exact path="/configuration"><Configuration /></Route>,
  <Route exact path="/ranking" icon={RankingIcon} component={Ranking} />,
  <Route exact path="/promote" icon={PromoteIcon} component={Promote} />,
  <Route aaa="bbb" exact path="/logistics" icon={LogisticsIcon} component={Logistics} />,
  <Route exact path="/badgescanner" icon={ScanIcon} component={ScanTutorial} />,
  <Route exact path="/delivery" component={Delivery} />,
  <Route exact path="/messeshop" component={MesseShop} />,
  <Route exact path="/parking" component={Parking} />,
  <Route exact path="/technicalguidelines" component={TechnicalGuidelines} />,
  <Route exact path="/speaking" component={Speaking} />,


  // <Route exact path="/rewards" component={Rewards} />,
  // <Route exact path="/invite-vip" component={Logistics} />
];
