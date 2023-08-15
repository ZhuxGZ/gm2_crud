import { Button, Divider, Typography } from "@mui/joy";
import Add from "@mui/icons-material/Add";

const Dashboard = ({ children }) => {
	return (
		<div className="mt-4 p-4">
			<div className="flex items-center mb-3">
				<Typography level="h1" fontWeight="xl">
					Dashboard
				</Typography>
				<div className="ml-auto">
					<Button startDecorator={<Add />} color="success">
						NEW PRODUCT
					</Button>
				</div>
			</div>
			<Divider />
			<div className="dashboard_display mt-4 grid">{children}</div>
		</div>
	);
};

export default Dashboard;
