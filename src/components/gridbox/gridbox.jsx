import React from 'react'
import styled from 'styled-components'

function Gridbox (props) {

      /* Gridbox accepts these props; 
      * height (default auto)
      * width (default 100%)
      * rows  (default 1)
      * columns (default 1)
      * gap (default 8px)
      * child (requires content in grid)
        */

    const Section = styled.section`
        display: grid;
        margin: auto;
        justify-items: center;
        align-item: center;
        grid-template-columns: repeat(${props => props.columns}, 1fr);
        grid-template-rows: repeat(${props=>props.rows}, 1fr);
        gap: ${props => props.gap};
        width: ${props => props.width};
        height: ${props => props.height}; 
    `
    Section.defaultProps = {
        columns : "1",
        rows : "1",
        gap : "8px",
        width : "100%",
        height : "auto",
    }

    return (
        <Section {...props}>{props.child}</Section>
    )
}

export default Gridbox