import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Popper(props) {
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	return (
		<Snackbar
			open={props.open}
			autoHideDuration={6000}
			onClose={props.handleClose}
		>
			<Alert
				className="alert-popper"
				onClose={props.handleClose}
				severity="error"
			>
				Passwords Don't match!
			</Alert>
		</Snackbar>
	);
}
