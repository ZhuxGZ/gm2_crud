import {
	Button,
	Divider,
	Typography,
	Modal,
	ModalDialog,
	Stack,
	Alert,
	FormControl,
	Input,
	FormLabel,
	Textarea,
} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import { useState } from "react";

const Dashboard = ({ children }) => {
	const [create, setCreate] = useState(false);
	return (
		<div className="mt-4 p-4">
			<div className="flex items-center mb-3">
				<Typography level="h1" fontWeight="xl">
					Dashboard
				</Typography>
				<div className="ml-auto">
					<Button
						startDecorator={<Add />}
						color="success"
						onClick={() => setCreate(true)}
					>
						NEW PRODUCT
					</Button>
				</div>
			</div>
			<Modal open={create} onClose={() => setCreate(false)}>
				<ModalDialog
					aria-labelledby="basic-modal-dialog-title"
					aria-describedby="basic-modal-dialog-description"
					sx={{ minWidth: 400 }}
				>
					<Typography id="basic-modal-dialog-title" level="h2">
						Create a new product
					</Typography>
					<Typography id="basic-modal-dialog-description">
						Please fill the information
					</Typography>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							setCreate(false);
						}}
					>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input autoFocus required />
							</FormControl>
							<FormControl>
								<FormLabel>Price</FormLabel>
								<Input autoFocus startDecorator={"$"} type="number" required />
							</FormControl>
							<FormControl>
								<FormLabel>Description</FormLabel>
								<Textarea
									placeholder="Try to submit with no text!"
									required
									sx={{ mb: 1, height: 100 }}
								/>
							</FormControl>
							<Button type="submit">Submit</Button>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
			<Divider />
			<div className="dashboard_display w-full mt-4 grid grid-flow-col-dense grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
				{children}
			</div>
		</div>
	);
};

export default Dashboard;
