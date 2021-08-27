import React, { useState }  from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Slider from "./Slider";
import TagCategory from "./TagCategory";
import SessionDetail from "./SessionDetails";
import { ReactComponent as DownloadIcon  } from "../assets/images/svg/download-icon.svg";
import { ReactComponent as DurationIcon  } from "../assets/images/svg/duration-icon.svg";
import { ReactComponent as CapacityIcon  } from "../assets/images/svg/capacity-icon.svg";
import { Button } from "reactstrap";
import Dummycontent from "./Dummycontent";
import CustomScrollbar from "./CustomScrollbar";

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return(
<React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Info.
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Publisher
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className="tabContentContainer">
              <CustomScrollbar autoHeight autoHeightMax={"calc(100vh - 176px)"} >
                <Slider />
                <div className="d-flex py-3">
                  <TagCategory name='Car'/>
                  <TagCategory name='#1 top free'/>
                  <TagCategory name='Social'/>
                </div>
                <div className="d-flex py-3">
                  <SessionDetail info="51MB" actionIcon={<DownloadIcon/> }/>
                  <SessionDetail info="20 minutes" actionIcon={<DurationIcon/> }/>
                  <SessionDetail info="15 members" actionIcon={<CapacityIcon /> }/>
                  <SessionDetail info="51MB" actionIcon={<DownloadIcon/> }/>
                  <SessionDetail info="20 minutes" actionIcon={<DurationIcon/> }/>
                </div>
                <Button className="createButton px-3 py-2 fs-18 fw-600 my-3"> Create Room</Button>
                <p>Note :  Before  Create room Please selection Thumbnail, It’s mention below</p>
                <div class="divider my-2"></div>
                <Dummycontent />
              </CustomScrollbar>
            </div>
        </TabPane>
        <TabPane tabId="2">
        <div className="tabContentContainer fs-14">
            Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor. The journey takes Bilbo on a path through treacherous lands swarming with orcs, goblins and other dangers, not the least of which is an encounter with Gollum (Andy Serkis) and a simple gold ring that is tied to the fate of Middle Earth in ways Bilbo cannot even fathom.
        </div>
        </TabPane>
      </TabContent>
    </React.Fragment>
    );
}

export default Tabs;