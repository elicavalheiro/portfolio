import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import WorkAndProjects from '../pages/WorkAndProjects';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/work-projects" component={WorkAndProjects} />
    </Switch>
  )
}

export default Routes;
