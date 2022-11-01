import React from "react";
import PropTypes from 'prop-types'
import {SectionBox} from "./Section.styled"

export const Section = (props) => (
<SectionBox>
        <h2>{props.title}</h2>
        {props.children}
 </SectionBox>
)


Section.propType = {
    title: PropTypes.string,
}