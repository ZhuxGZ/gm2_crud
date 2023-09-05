import UserProfile from './UserProfile';

const Header = () => {
	return (
		<header className="h-16 w-full bg-[#FF8645] flex items-center p-4">
			<h1 className="font-bold text-2xl">GM2 CRUD</h1>

			<UserProfile />
		</header>
	);
};

export default Header;
