const ProtectedRoute = ({user, children}) => {
	if (!user[0].isAdmin) {
		return (<div>Not working</div>)
	}

	return children;
};
export default ProtectedRoute;
