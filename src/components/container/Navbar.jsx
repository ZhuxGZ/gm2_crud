import { MenuButton, Menu, MenuItem, Dropdown, ListDivider, Avatar } from "@mui/joy";

const Navbar = () => {
	return (
		<nav className="p-4 pr-8 bg-emerald-500 flex items-center">
			<div className="logo flex content-center">
				<p className="font-bold text-white text-2xl">CRUD Dashboard</p>
			</div>
			<div className="ml-auto">
				<Dropdown>
					<MenuButton color="plain" variant="solid">
						<Avatar variant="soft" size="lg" />
					</MenuButton>
					<Menu size="md">
						<MenuItem>Dashboard</MenuItem>
						<MenuItem>Configuration</MenuItem>
						<ListDivider />
						<MenuItem color="danger">Log Out</MenuItem>
					</Menu>
				</Dropdown>
			</div>
		</nav>
	);
};

export default Navbar;
