import Avatar from "@mui/joy/Avatar";

const Navbar = () => {
	return (
		<header>
			<div className="logo"></div>
			<div className="user flex justify-end">
				<Avatar variant="soft" />
			</div>
		</header>
	);
};

export default Navbar;
