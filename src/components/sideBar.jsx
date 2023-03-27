import { Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
const listItems = [
    {
    //   listIcon: <Home />,
      listText: "Channels"
    },
    {
    //   listIcon: <AssignmentInd />,
      listText: "Language"
    },
    {
    //   listIcon: <Apps />,
      listText: "Genres"
    },
  ];

export const SideBar = () => {
  return (
    
        <List>
        {listItems.map((listItem, index) => (
          <ListItem key={index}>
            <ListItemText primary={listItem.listText} sx={{cursor:'pointer'}}/>
          </ListItem>
        ))}
      </List>
    
  )
}
