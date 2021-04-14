import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<Link to="/Dashboard">Home</Link>
		</div>
	</div>
    );
}
 
export default NotFound;




	

