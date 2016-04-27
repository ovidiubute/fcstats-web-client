import React from 'react'

import { DropdownButton, MenuItem } from 'react-bootstrap'

class SeasonSelector extends React.Component {
  render() {
    return (
      <DropdownButton bsStyle="default"
        title="Season"
        key="season-selector"
        id="season-selector-dropdown"
        style={{marginTop: "14px"}}
      >
        <MenuItem eventKey="1" active>1993 - 1994</MenuItem>
        <MenuItem eventKey="2">1994 - 1995</MenuItem>
      </DropdownButton>
    );
  }
}

SeasonSelector.propTypes = {
  seasons: React.PropTypes.array.isRequired
}

export default SeasonSelector
