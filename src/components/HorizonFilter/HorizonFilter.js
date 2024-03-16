import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox
} from "@material-ui/core";
export const HorizonFilter = ({ column }) => {
  return (
    <Paper>
      <div style={{ height: "300px", overflow: "scroll" }}>
        <div style={{ display: "flex", alignItems: "stretch", padding: "1em" }}>
          <input type="text" />
        </div>
        <List>
          {[0, 1, 2, 3, 4, 5].map(value => {
            return (
              <ListItem key={value} dense button>
                <Checkbox
                  edge="start"
                  checked={true}
                  tabIndex={-1}
                  disableRipple
                  color="primary"
                />
                <ListItemText>{`Line item ${value}`}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Paper>
  );
};
