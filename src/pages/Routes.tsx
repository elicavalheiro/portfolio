import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import En_Home from '../pages/En_Home';
import WorkAndProjects from '../pages/WorkAndProjects';
import TotodoProject from '../pages/TotodoProject';
import DevcvProject from '../pages/DevcvProject';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact={true}>
        <Redirect to="/en" />
      </Route>
      <Route path="/en" exact={true} component={En_Home} />
      <Route path="/en/work-projects" exact={true} component={WorkAndProjects} />
      <Route path="/en/work-projects/totodo" component={TotodoProject} />
      <Route path="/en/work-projects/devcv" component={DevcvProject} />
    </Switch>
  )
}

export default Routes;
