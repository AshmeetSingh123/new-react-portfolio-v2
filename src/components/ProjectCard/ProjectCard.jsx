import React, { useContext } from "react";
import "./ProjectCard.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ThemeContext } from "../../context";
import { Link } from "@mui/material";

function SimpleDialog(props) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog className="project-dialog" onClose={handleClose} open={open}>
      <DialogTitle className="project-dialog-title">
        {props.name && props.name}
      </DialogTitle>
      <div className="project-dialog-screenshots-container">
        {
          props.images.map((image) => (
            <img
              key={image}
              className="project-dialog-screenshots"
              src={image}
              alt="screenshot"
            />
          ))
        }
      </div>
      <Typography className="project-dialog-description">
        Description of the Project
      </Typography>
      <Typography className="project-dialog-content">
      {props.description && props.description}
      </Typography>
      <div className="project-dialog-button-container">
        <Button className="project-dialog-buttons">
          <Link href={props.link && props.link} >
            Github
          </Link>
        </Button>
        <Button className="project-dialog-buttons" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Dialog>
  );
}

const ProjectCard = (props) => {
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
        image={props.images[0]}
        alt="screenshot"
      />
      <CardContent className="project-card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="project-name-heading"
        >
          {props.name && props.name}
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
      <SimpleDialog name={props.name} description={props.description} link={props.link} images={props.images} open={open} setOpen={setOpen} onClose={handleClose} />
    </Card>
  );
};

export default ProjectCard;
