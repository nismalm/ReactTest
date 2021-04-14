import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div  className='container'style={{alignContent:'center', marginLeft:'40%',marginTop:'50px'}} >
            <h1>Hello Home</h1>
            <Link  to="/Login"> <button style={{alignItems:'center' ,marginLeft:'70px'}} type="button" className="btn btn-primary" >login</button></Link>

        </div>
    );
}
 
export default Home;