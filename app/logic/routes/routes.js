import React        from 'react';
import { Route }        from 'react-router-dom';

import Home        from '../../containers/HomeContainer';
import Gate from '../../components/pages/gate/Gate';



const Routes = () => {
	return (
		<div>
			<Route exact path={`/`} component={ Home } />
			<Route path={`/gate`} component={ Gate } />

		</div>
	)
};

export default Routes;