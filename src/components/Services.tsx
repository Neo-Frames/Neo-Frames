import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import React from "react";
import { height } from "@mui/system";
import Mainlogo from "./mainLogo";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ gap: 2, alignItems: "center" }}>
      <Typography
        sx={{ ml: 10, fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      >
        <Mainlogo height={114} width={367} />
      </Typography>
      <Typography
        sx={{ ml: 10, fontSize: 40 }}
        color="text.secondary"
        gutterBottom
      >
        The Architect Studio
      </Typography>
      <Typography variant="h5" component="div" sx={{ ml: 10, mb: 2 }}>
        Top Notch Services
      </Typography>
      <Typography sx={{ ml: 10, mb: 2, fontSize: 30 }} color="text.secondary">
        Planning
      </Typography>
      <Typography sx={{ ml: 10, mb: 2, fontSize: 30 }} color="text.secondary">
        Construction
      </Typography>
      <Typography sx={{ ml: 10, mb: 2, fontSize: 30 }} color="text.secondary">
        Interiors
      </Typography>
      <Typography sx={{ ml: 10, mb: 2, fontSize: 30 }} color="text.secondary">
        Exteriors
      </Typography>
      <Typography sx={{ ml: 10, mb: 2, fontSize: 30 }} color="text.secondary">
        Landscaping
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Services() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10em",
      }}
    >
      <div style={{ width: "50%" }}>
        <span
          style={{
            position: "relative",
            color: "white",
            fontWeight: "100",
            fontSize: "3.5em",
            backgroundColor: "Orange",
            wordWrap: "break-word",
            textAlign: "justify",
          }}
        >
          The One Stop Solution for complete building services
        </span>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CheckCircleOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Professional Designs" />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CheckCircleOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Experienced Architects" />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CheckCircleOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Affordable Rates" />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CheckCircleOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Best Design Service" />
          </ListItem>
        </List>
      </div>
      <div style={{ position: "relative", width: "30%", height: "100px" }}>
        <Box sx={{ minWidth: 275, minHeight: 700 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </div>
  );
}
