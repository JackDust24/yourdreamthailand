/*
This component is for displaying the Advert
    We use this for displaying the advert or call the PDF Viewer
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const styles = {
    card: {
        maxWidth: 445,
    },
    media: {
        height: 160,
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial'
      },
    text: {
        textAlign: 'center',

    },
    fontLink: {
        color: '#304ffe',
    },
}

class Advert extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { classes } = this.props;
        const passedAdvert = this.props.advert;


        let linkToPass = passedAdvert.link;
        { if(passedAdvert.pdfLink == true) {
            linkToPass = '/#/PDFViewer';
         } }

        return (

            <Card className={classes.card}>
                <ButtonBase
                className={classes.cardAction}
                onClick={()=> window.open(`${linkToPass}`, "_blank")}
                // onClick={()=> window.open(`${passedAdvert.link}`, "_blank")}
                >
                    <Typography gutterBottom variant="h5" component="h1" className={classes.text}>
                    {passedAdvert.title}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={passedAdvert.image}
                        title={passedAdvert.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {passedAdvert.title}
                        </Typography>
                        <Typography component="p">
                        {passedAdvert.info}
                        </Typography>
                        <Typography component="h5" className={classes.fontLink}>
                        Learn more
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        )
    };
}

Advert.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Advert);