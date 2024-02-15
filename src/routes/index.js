import AuthView from '../views/auth/AuthView';
import MainData from '../views/MainData';
import Signin from '../views/auth/Signin';
import Signup from '../views/auth/Signup';

let routes = [

	{
		path: '/',
		component: MainData,
		layout: 'main',
	},
	{
        path: "/signin",
        component: Signin,
        layout: "auth",
    },
    {
        path: "/signup",
        component: Signup,
        layout: "auth",
    },
	
];
export default routes;