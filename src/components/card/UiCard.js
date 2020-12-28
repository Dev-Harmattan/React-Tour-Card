import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image1 from '../../images/image1.jpg';
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import {view} from '../../json/file.json';



const useStyles = makeStyles( (theme) => ({
  root: {
    maxWidth: 650,
  },
  media: {
    height: 300,
  },
  mediaHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  price: {
    background: " #dee6ee",
    padding: theme.spacing(0.5),
  },
  buttonAction: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  }
}));

export function UiCard(props) {
  const data = [...view];
  const imageArray = [image1, image2, image3, image4, image5];
  const classes = useStyles();

  return (
    <div className="cardWrapper">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageArray[props.index]}
            title="man with bicycle"
          />
          <CardContent>
            <div className={classes.mediaHeading}>
              <Typography gutterBottom variant="h6" component="p">
               {props.title}
              </Typography>
              <Typography
                className={classes.price}
                gutterBottom
                variant="h6"
                component="p"
              >
               {props.price}
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.content}
              {props.isTrue && data[props.id - 1]}
              <a href onClick={() => props.handleViewMore(props.id)}> {props.isTrue ? "Show Less" :" ...View More"}</a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonAction}>
          <Button onClick={() => {props.handleDeleteClick(props.id)}} variant="outlined" size="large" color="secondary">
           Not Interested
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
