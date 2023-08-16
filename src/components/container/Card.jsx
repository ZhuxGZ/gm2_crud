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
} from "@mui/joy";

import { Delete, Edit, MoreVert, WarningRounded } from "@mui/icons-material";

const ProductCard = ({ name, price, img }) => {
	const [removeWarning, setRemoveWarning] = useState(false);
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
								<MenuItem color="warning">
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
					</CardActions>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductCard;
