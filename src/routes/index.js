import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from '../container';
import Home from '../components/home';
import Recruitment from '../components/recruitment';

const Routes = () => (
	<Router>
		<Container>
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route path={'/trang-chu'} component={Home} />
				<Route path={'/tuyen-dung'} component={Recruitment} />
			</Switch>
		</Container>
	</Router>
)

export default Routes;
