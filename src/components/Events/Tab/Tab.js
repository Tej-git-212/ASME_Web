import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tab_style.css";
import Tabpanel from "./Tabpanel/TabPanel";
import img1 from "../../ui_utils/img/banner1.jpg";


const imgArr=[
    img1,
    img1,
    img1,
    img1
];

const  TitleEvent=()=>{
  return(
  <div className="event_header">
      <div className="event_container">
        <h3>Events</h3>
        <div className="border"></div>
      </div>
      
  </div>)
}
 const ShowTab=() => (
   <>
   <TitleEvent/>
  <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>HPVC</Tab>
      <Tab>IAM3D</Tab>
      <Tab>SDC</Tab>
      <Tab>OLD GUARD</Tab>
    </TabList>

    <TabPanel>
      <Tabpanel 
          img={img1}
          title="All"
          content=" jitul ljalkjf skfsldn sdflns aslkn asd  sdf asd ddqwpriqw  n laskd "
          contentP="The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth ."
          imgArr={imgArr}
          imglogo={img1}

      />
    </TabPanel>
    <TabPanel>
    <Tabpanel 
          img={img1}
          title="HPVC"
          content=" jitul ljalkjf skfsldn sdflns aslkn asd  sdf asd ddqwpriqw  n laskd "
          contentP="The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth ."
          imgArr={imgArr}
          imglogo={img1}

      />
    </TabPanel>
    <TabPanel>
    <Tabpanel 
          img={img1}
          title="IAM3D"
          content=" jitul ljalkjf skfsldn sdflns aslkn asd  sdf asd ddqwpriqw  n laskd "
          contentP="The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth ."
          imgArr={imgArr}
          imglogo={img1}

      />
    </TabPanel>
    <TabPanel>
    <Tabpanel 
          img={img1}
          title="SDC"
          content=" jitul ljalkjf skfsldn sdflns aslkn asd  sdf asd ddqwpriqw  n laskd "
          contentP="The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth ."
          imgArr={imgArr}
          imglogo={img1}

      />
    </TabPanel>
    <TabPanel>
    <Tabpanel 
          img={img1}
          title="OLD GAURD"
          content=" jitul ljalkjf skfsldn sdflns aslkn asd  sdf asd ddqwpriqw  n laskd "
          contentP="The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth property should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices. The variant fullWidth ."
          imgArr={imgArr}
          imglogo={img1}

      />
    </TabPanel>
  </Tabs>
  </>
);



export default ShowTab;