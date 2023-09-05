import { Avatar } from '@mui/joy';

const UserProfile = () => {
	return (
		<div id="UserProfile" className="flex gap-2 items-center ml-auto">
			<div id="userInfo" className="text-end">
				<h3 className="name">Ignacio Bergantiños</h3>
				<p id="role" className="text-sm text-[#ffffffaa]">
					Workspace Manager
				</p>
			</div>
			<Avatar>IB</Avatar>
		</div>
	);
};

export default UserProfile;
