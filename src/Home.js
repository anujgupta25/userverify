import React , {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Home = () =>{

    const history = useHistory();

    useEffect(() => {
        
        return () => {
            if(localStorage.getItem('tokenId') == null){
                history.push('/');
            }
        }
    }, [])

    if(localStorage.getItem('tokenId')==null || localStorage.getItem('tokenId')== ''  ){
        history.push('/');
    }

    return(
        <div className='jumbotron bg-muted'>
        <div className='float-right mt-n5'>

            <Link to='/changep'>
            <button className=' btn btn-sm btn-outline-secondary'>Change Password</button>
            </Link>
            <Link to='/Logout'>
            <button className='btn btn-sm ml-2 btn-outline-danger'>Logout</button>
            </Link>
        </div>
        <h2 className='text-center  text-primary'>Hello, <br /> You're Logged In !</h2>
        <p className='container mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
        </div>
    )
}

export default Home;