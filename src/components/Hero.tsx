import StartIcon from "@mui/icons-material/Start";
import Fab from "@mui/material/Fab";
import MainNavbar from "./MainNavbar";

interface HeroProps {
  Heading: string;
  SubHeading: string;
  imageUrl: string;
}

export default function Hero(props: HeroProps) {
  const { Heading, SubHeading, imageUrl } = props;
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "url(" + imageUrl + ")",
        backgroundSize: "cover",
        opacity: "1",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <MainNavbar /> */}
      <div>
        <div
          style={{
            marginLeft: "0.5em",
            // marginTop: "1em",
            position: "relative",
            color: "white",
            fontWeight: "100",
            fontSize: "2.5em",
            backgroundColor: "Black",
          }}
        >
          {Heading}
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "0.5em",
            marginTop: "1.5em",
            position: "relative",
            color: "orange",
            fontWeight: "50",
            fontSize: "1.5em",
          }}
        >
          {SubHeading}
        </div>
        <Fab variant="extended" sx={{ marginLeft: "10em", marginTop: "10em" }}>
          <StartIcon sx={{ mr: 1 }} />
          Start Designing
        </Fab>
      </div>
    </div>
  );
}
