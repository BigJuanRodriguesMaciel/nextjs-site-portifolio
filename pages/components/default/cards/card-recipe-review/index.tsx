import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface Props{
  name: String,
  links: {
    logoLink: String,
    linkOfProject: String
  },
  shortText?: String,
  longText?: Array<String>,
  projectColor: String,
  functions: String
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardRecipeReview({name, functions, links, shortText, longText, projectColor}:Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${functions}`}>
      <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#212121"}}>
        <>
          <CardHeader
            avatar={
              <>
                {
                  links.logoLink ? 
                  <CardMedia
                    component="img"
                    style={
                      {width: '40px', height: '40px', borderRadius: "100%"}
                    }
                    image={`${links.logoLink}`}
                    alt="Paella dish"
                  /> :
                  <Avatar style={{ backgroundColor: `${projectColor}` || '#18d26e' }} aria-label="recipe">
                    {name?.split("")[0]}
                  </Avatar>
                }
              </>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Shrimp and Chorizo Paella"
            // subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={`${links.logoLink}`}
            alt="Paella dish"
            style={{objectFit:"contain"}}
          />
          <CardContent>
            <div>
              <p>{shortText}</p>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ArrowCircleRightIcon />
            </IconButton>
            <Link style={{fontSize: 10}} href={`${links.linkOfProject}`}>{links.linkOfProject}</Link>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div>
                <p>Method:</p>
              </div>
              {
                longText?.map((item, index) => {
                  return (
                    <div>
                      <p>{item}</p>
                    </div>
                  )
                })
              }
            </CardContent>
          </Collapse>
        </>
      </Card>
    </div>
  );
}