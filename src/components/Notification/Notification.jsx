import React from "react";
import PropTypes from "prop-types"
import {Message} from "./Notification.styled"

export const Notification = (props) => (
    <Message>{props.message}</Message>
)

Notification.propType = {
    message: PropTypes.string
}