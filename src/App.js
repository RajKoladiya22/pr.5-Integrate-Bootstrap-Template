import "./App.css";
import "./index.css"
import "./foot.css"
import "./banner.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Head } from "./header";
import { TopHead } from "./topheader";  
import { Foot } from "./myfoot";
import { BSlider } from "./banner";
import { Description } from "./des";
import {StandardImageList} from "./img";
import { Road } from "./road";
import { MyCard } from "./card";
import { Footup } from "./footup";



function App() {
  return (
    <>
      <TopHead />
      <Head />

      <BSlider/>
      <Description/>
      <StandardImageList/>
      <Road/>
      <MyCard />
      <Footup />

      <Foot/>
    </>
  );
}

export default App;
