import React from 'react';
import { Route, Switch, RouteProps, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../pages/Home';
import WorkAndProjects from '../pages/WorkAndProjects';
import TotodoProject from '../pages/TotodoProject';
import DevcvProject from '../pages/DevcvProject';

import './Routes.css';

interface IProps {
  location: RouteProps["location"];
}

const Routes = ({ location }: IProps) => {
  return(
    <>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location?.key}
          appear={true}
          timeout={{ enter: 1000, exit: 1000}}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={WorkAndProjects} />
              <Route path="/projects/totodo" component={TotodoProject} />
              <Route path="/projects/devcv" component={DevcvProject} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default withRouter(Routes);
