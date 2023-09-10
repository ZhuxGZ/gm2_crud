'use client';
import { useEffect, useState } from 'react';
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
	const API_URL = 'https://64fb193acb9c00518f7aa434.mockapi.io/api/v1/id';
	const postProduct = async (event: any) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: event.target[0].value,
				price: event.target[1].value,
				image: event.target[2].value,
			}),
		};
		const response = await fetch(API_URL, options);
		const data = await response.json();
		console.log(data);
		setOpen(false);
		window.location.reload();
	};

	return (
		<>
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
							postProduct(event);
							event.preventDefault();
						}}
					>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input autoFocus required />
							</FormControl>
							<FormControl>
								<FormLabel>Price</FormLabel>
								<Input type="number" required />
							</FormControl>
							<FormControl>
								<FormLabel>Image</FormLabel>
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
								<Button color="success" type="submit" sx={{ width: '60%' }}>
									Create
								</Button>
							</div>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</>
	);
};

export default AddProdModal;
