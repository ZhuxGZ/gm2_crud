import { useState } from "react";

import {
	Card,
	CardContent,
	CardActions,
	AspectRatio,
	Typography,
	Dropdown,
	Menu,
	MenuButton,
	MenuItem,
	IconButton,
	Modal,
	ModalDialog,
	Divider,
	Box,
	Button,
	FormControl,
	FormLabel,
	Stack,
	Input,
	Textarea,
} from "@mui/joy";

import { Delete, Edit, MoreVert, WarningRounded } from "@mui/icons-material";

const ProductCard = ({ name, price, description, img }) => {
	const [removeWarning, setRemoveWarning] = useState(false);
	const [editForm, setEditForm] = useState(false);
	return (
		<div className="card max-w-xs">
			<Card variant="outlined" color="neutral" size="md">
				<AspectRatio minHeight="140px" maxHeight="240px">
					<img src={img} loading="lazy" alt="" />
				</AspectRatio>
				<CardContent orientation="horizontal" sx={{ pt: "0.5em" }}>
					<div className="prod-info ml-1">
						<Typography level="title-lg">{name}</Typography>
						<Typography level="body-sm">${price}</Typography>
					</div>
					<CardActions sx={{ ml: "auto", pt: "0" }}>
						<Dropdown>
							<MenuButton
								slots={{ root: IconButton }}
								slotProps={{ root: { variant: "outlined", color: "neutral" } }}
							>
								<MoreVert />
							</MenuButton>
							<Menu sx={{ translate: "-2em" }}>
								<MenuItem color="warning" onClick={() => setEditForm(true)}>
									<Edit />
									Edit
								</MenuItem>
								<MenuItem color="danger" onClick={() => setRemoveWarning(true)}>
									<Delete />
									Remove
								</MenuItem>
							</Menu>
						</Dropdown>
						<Modal open={removeWarning} onClose={() => setRemoveWarning(false)}>
							<ModalDialog
								variant="outlined"
								role="alertdialog"
								aria-aria-labelledby="alert-title"
								aria-aria-describedby="alert-desc"
							>
								<Typography
									level="h2"
									id="alert-title"
									startDecorator={<WarningRounded />}
								>
									Are you sure?
								</Typography>
								<Divider sx={{ mt: "1em", mb: "1em" }} />
								<Typography id="alert-desc" textColor="text.tertiary">
									The product would be deleted permanently and it would be
									irrecoverable.
								</Typography>
								<Box
									sx={{
										display: "flex",
										gap: 1,
										justifyContent: "flex-end",
										pt: 2,
										mt: "1em",
									}}
								>
									<Button
										varian="plain"
										color="neutral"
										onClick={() => setRemoveWarning(false)}
									>
										Cancel
									</Button>
									<Button
										variant="solid"
										color="danger"
										onClick={() => setRemoveWarning(false)}
									>
										Delete
									</Button>
								</Box>
							</ModalDialog>
						</Modal>
						<Modal open={editForm} onClose={() => setEditForm(false)}>
							<ModalDialog
								aria-labelledby="basic-modal-dialog-title"
								aria-describedby="basic-modal-dialog-description"
								sx={{ minWidth: 400 }}
							>
								<Typography id="basic-modal-dialog-title" level="h2">
									Edit your product
								</Typography>
								<form
									onSubmit={(event) => {
										event.preventDefault();
										setEditForm(false);
									}}
								>
									<Stack spacing={2}>
										<FormControl>
											<FormLabel>Name</FormLabel>
											<Input autoFocus placeholder={name} />
										</FormControl>
										<FormControl>
											<FormLabel>Price</FormLabel>
											<Input
												autoFocus
												startDecorator={"$"}
												type="number"
												placeholder={price}
											/>
										</FormControl>
										<FormControl>
											<FormLabel>Description</FormLabel>
											<Textarea
												placeholder={description}
												sx={{ mb: 1, height: 100 }}
											/>
										</FormControl>
										<Button type="submit">Submit</Button>
									</Stack>
								</form>
							</ModalDialog>
						</Modal>
					</CardActions>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductCard;
