import React, { useContext } from "react";
import "./ProjectCard.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ScreenShot from "../../images/Screenshot.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ThemeContext } from "../../context";

function SimpleDialog(props) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog className="project-dialog" onClose={handleClose} open={open}>
      <DialogTitle className="project-dialog-title">
        Name of the Project
      </DialogTitle>
      <div className="project-dialog-screenshots-container">
        <img
          className="project-dialog-screenshots"
          src={ScreenShot}
          alt="screenshot"
        />
        <img
          className="project-dialog-screenshots"
          src={ScreenShot}
          alt="screenshot"
        />
        <img
          className="project-dialog-screenshots"
          src={ScreenShot}
          alt="screenshot"
        />
      </div>
      <Typography className="project-dialog-description">
        Description of the Project
      </Typography>
      <Typography className="project-dialog-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex
        leo, molestie vitae fringilla eu, auctor eget ex. Sed at nibh porttitor,
        laoreet elit a, tincidunt ligula. Sed at arcu eu purus accumsan tempor
        ut elementum massa. Sed porttitor commodo imperdiet. Suspendisse et
        risus vitae justo blandit condimentum sit amet nec libero. Maecenas sed
        fringilla felis, et tincidunt tortor. Ut nunc lorem, tempor id porta
        vitae, rutrum at tortor. Sed non tristique ipsum. Aliquam id eros ac
        nulla lobortis eleifend a vestibulum sapien. Maecenas at placerat neque,
        ac commodo risus. Aliquam ut nisl eu enim semper euismod a in ex.
      </Typography>
      <div className="project-dialog-button-container">
        <Button className="project-dialog-buttons" onClick={handleClose}>
          Github
        </Button>
        <Button className="project-dialog-buttons" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Dialog>
  );
}

const ProjectCard = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Card className="project-card" sx={{ maxWidth: "30%" }}>
      <CardMedia
        className="project-card-image"
        component="img"
        height="140"
        image={ScreenShot}
        alt="screenshot"
      />
      <CardContent className="project-card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="project-name-heading"
        >
          Project 1
        </Typography>
        <Button
          className="view-more-button"
          size="small"
          onClick={handleClickOpen}
          style={{backgroundColor: darkMode ? 'white' : 'black', color: darkMode ? 'var(--secondary)' : 'white', fontWeight: darkMode ? '600' : '500'}}
        >
          View More
        </Button>
      </CardContent>
      <SimpleDialog open={open} setOpen={setOpen} onClose={handleClose} />
    </Card>
  );
};

export default ProjectCard;
