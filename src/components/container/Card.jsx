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
} from "@mui/joy";

import { Delete, Edit, MoreVert } from "@mui/icons-material";

const ProductCard = ({ name, price, img }) => {
	return (
		<div className="card max-w-xs">
			<Card variant="outlined" color="neutral" size="md">
				<AspectRatio minHeight="140px" maxHeight="200px">
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
								<MenuItem color="danger">
									<Delete />
									Remove
								</MenuItem>
							</Menu>
						</Dropdown>
					</CardActions>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductCard;
