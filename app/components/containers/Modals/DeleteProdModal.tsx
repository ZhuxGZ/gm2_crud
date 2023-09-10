'use client';
import { Fragment, useState } from 'react';
import { Box, Button, Divider, Modal, ModalDialog, Typography } from '@mui/joy';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const DeleteProdModal = ({ id }: { id: string }) => {
	const [open, setOpen] = useState<boolean>(false);
	const API_URL = `https://64fb193acb9c00518f7aa434.mockapi.io/api/v1/id/${id}`;
	const deleteProduct = async () => {
		await fetch(API_URL, { method: 'DELETE' });
		setOpen(false);
		await window.location.reload();
	};

	return (
		<>
			<Button
				variant="plain"
				color="danger"
				endDecorator={<DeleteForever />}
				onClick={() => setOpen(true)}
			>
				Discard
			</Button>
			<Modal open={open}>
				<ModalDialog
					variant="outlined"
					role="alertdialog"
					aria-labelledby="alert-dialog-modal-title"
					aria-describedby="alert-dialog-modal-description"
				>
					<Typography
						id="alert-dialog-modal-title"
						level="h2"
						startDecorator={<WarningRoundedIcon />}
					>
						Confirmation
					</Typography>
					<Divider />
					<Typography id="alert-dialog-modal-description" textColor="text.tertiary">
						Are you sure you want to discard this product?
					</Typography>
					<Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
						<Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button variant="solid" color="danger" onClick={deleteProduct}>
							Discard
						</Button>
					</Box>
				</ModalDialog>
			</Modal>
		</>
	);
};

export default DeleteProdModal;
