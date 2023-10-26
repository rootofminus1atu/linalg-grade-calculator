import React from 'react'
import { Typography, ListItem, ListItemText, List } from '@mui/material'

export default function Todos() {
  return (
    <div className="content-group" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
      <Typography variant="h6">TODO:</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Highlight the numbers in the Grades table when the requirements are met" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Grade boundaries config (for example, the ability to change 22 to 21 for D)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contents config" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Animations" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Better spacing and size" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Better table (expandable and contractable rows)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Better way to merge state" />
        </ListItem>
        <ListItem>
          <ListItemText primary="A button to reset local storage" />
        </ListItem>
      </List>
      <Typography variant="h6">I might or might not work on those</Typography>
    </div>
  )
}
