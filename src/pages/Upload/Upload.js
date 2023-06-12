import { Outlet } from 'react-router-dom';
import GlbDropzone from '../../components/Dropzone';
import Toolbar from '../../components/ToolBar';
                                 
const Home = () => {                                  
        return (                                 
        <>
                <GlbDropzone/>
                <Outlet />                                  
                </>
                );
};
export default Home;

