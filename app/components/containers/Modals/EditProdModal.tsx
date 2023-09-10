'use client';
import { useState, Fragment, FormEvent } from 'react';
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

const EditProdModal = ({ id }: { id: string }) => {
	const [open, setOpen] = useState<boolean>(false);
	const API_URL = `https://64fb193acb9c00518f7aa434.mockapi.io/api/v1/id/${id}`;

	const editProduct = async (event: any) => {
		const formValues = {
			name: event.target[0].value,
			price: event.target[1].value,
			image: event.target[2].value,
		};

		let bodyValues = {};

		for (let key in formValues) {
			if (formValues[key].length != 0) {
				bodyValues[key] = formValues[key];
			}
		}

		console.log(bodyValues);

		const options = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bodyValues),
		};

		const response = await fetch(API_URL, options);
		const data = await response.json();
		console.log(data);
		setOpen(false);
		await window.location.reload();
	};

	return (
		<>
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
							editProduct(event);
							event.preventDefault();
						}}
					>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input autoFocus />
							</FormControl>
							<FormControl>
								<FormLabel>Price</FormLabel>
								<Input type="number" />
							</FormControl>
							<FormControl>
								<FormLabel>Image</FormLabel>
								<Input />
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
								<Button color="warning" type="submit" sx={{ width: '60%' }}>
									Confirm changes
								</Button>
							</div>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</>
	);
};

export default EditProdModal;
