'use client';
import { Fragment, useState } from 'react';
import {
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalDialog,
	Stack,
	Typography,
} from '@mui/joy';
import { Add } from '@mui/icons-material';

const AddProdModal = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Fragment>
			<Button
				variant="plain"
				color="success"
				onClick={() => setOpen(true)}
				startDecorator={<Add />}
			>
				Add
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog sx={{ minWidth: 400, maxWidth: 600, padding: '1.5em' }}>
					<Typography level="h2">Create a new product</Typography>
					<Typography>Fill the information of the product</Typography>
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
									color="success"
									type="submit"
									sx={{ width: '60%' }}
									onClick={() => setOpen(false)}
								>
									Create
								</Button>
							</div>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</Fragment>
	);
};

export default AddProdModal;
