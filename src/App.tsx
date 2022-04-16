import { Divider } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SlideShow from "./components/SlideShow";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <MainNavbar /> */}
      <Hero
        Heading="Interactive VR Architectural visualization"
        SubHeading="Experience the Realistic Environment and interact with materials"
        imageUrl="/1.jpg"
      />
      <Hero
        Heading="3D Interior and Exterior Rendering"
        SubHeading="Get Instant 3d modelling and high quality photorealistic renders with creative designs"
        imageUrl="/2.jpg"
      />
      <Hero
        Heading="Civil and Architecture Drawings"
        SubHeading="Every Space Counts. Free unlimited concept plans and architectural consulatation"
        imageUrl="/3.jpg"
      />
      <Hero
        Heading="Introducing the Interactive VR visualisation technology"
        SubHeading="Interactive VR visualisation will transport you to fully interactive 3D environment of you space designed by us, giving you the oppurtunity to explore a virtual representation of a particular room, floor, or building design as a whole"
        imageUrl="/4.jpg"
      />
      <div style={{}}>
        <span
          style={{
            width: "50%",
            marginLeft: "0.5em",
            marginTop: "1.5em",
            position: "relative",
            color: "Black",
            fontWeight: "50",
            fontSize: "3em",
          }}
        >
          Our Recent projects
        </span>
        <span
          style={{
            marginLeft: "0.5em",
            marginTop: "10em",
            position: "relative",
            color: "white",
            fontWeight: "100",
            fontSize: "5em",
            backgroundColor: "orange",
          }}
        >
          WorkShowCase
        </span>

        <SlideShow
          items={[
            {
              image: "/5.jpg",
            },
            {
              image: "6.jpg",
            },
            {
              image: "7.jpg",
            },
          ]}
          heading={[{ text: "page 1" }, { text: "page 2" }, { text: "page 3" }]}
        />
      </div>
      <Divider variant="middle" sx={{ color: "black" }} />
      <Services />
    </div>
  );
}

export default App;
