import Avatar from "@mui/joy/Avatar";

const Navbar = () => {
	return (
		<>
			<div className="logo"></div>
			<div className="user flex justify-end">
				<Avatar variant="soft" />
			</div>
		</>
	);
};

export default Navbar;
