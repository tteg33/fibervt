import { Outlet } from 'react-router-dom';
import Toolbar from '../components/ToolBar';

const Home = () => {
	return (
	<>
		<Toolbar />
		<Outlet />
		</>
		);
};
export default Home;
