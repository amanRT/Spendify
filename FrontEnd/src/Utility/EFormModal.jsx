import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import BillForm from "./BillForm";
import UserForm from "./UserForm";

export default function EFormModal(props) {
	// formType  = false -> Bill
	// formType  = true -> UserInfo
	const [formType, setType] = useState(true);
	function handleClick() {
		setType((prev) => !prev);
	}

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={props.handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={props.open}>
					<Box className="Modal-box">
						{formType ? <UserForm /> : <BillForm />}
						<div className="signup">
                            <p onClick={handleClick} >
                                {formType ? "Bill" : "User"} Form
                            </p>
                        </div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
