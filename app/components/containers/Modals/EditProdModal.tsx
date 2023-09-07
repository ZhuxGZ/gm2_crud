'use client';
import { useState, Fragment } from 'react';
import { Edit } from '@mui/icons-material';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalDialog,
	Stack,
	Typography,
	Divider,
} from '@mui/joy';

const EditProdModal = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Fragment>
			<Button variant="plain" color="warning" onClick={() => setOpen(true)}>
				Edit
				<Edit sx={{ marginLeft: '1.5em' }} />
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog sx={{ maxWidth: 500 }}>
					<Typography level="h2">Edit the product information</Typography>
					<Typography>Change ONLY the fields that you want update</Typography>
					<Divider sx={{ margin: '10px 1px' }} />
					<form
						onSubmit={(event) => {
							event.preventDefault();
							setOpen(false);
						}}
					>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input autoFocus required />
							</FormControl>
							<FormControl>
								<FormLabel>Price</FormLabel>
								<Input required />
							</FormControl>
							<FormControl>
								<FormLabel>Discount</FormLabel>
								<Input />
							</FormControl>
							<FormControl>
								<FormLabel>Description</FormLabel>
								<Input required />
							</FormControl>

							<div className="buttons w-full flex gap-1">
								<Button
									sx={{ width: '40%' }}
									variant="plain"
									color="neutral"
									onClick={() => setOpen(false)}
								>
									Cancel
								</Button>
								<Button
									color="warning"
									type="submit"
									sx={{ width: '60%' }}
									onClick={() => setOpen(false)}
								>
									Confirm changes
								</Button>
							</div>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</Fragment>
	);
};

export default EditProdModal;
