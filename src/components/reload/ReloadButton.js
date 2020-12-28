import React from 'react';
import Button from "@material-ui/core/Button";

export function ReloadButton(props) {
  return (
    <div className="buttonWrapper">
      <Button onClick={props.handleReload} variant="outlined" size="large" color="primary" >Refresh</Button>
    </div>
  )
}
