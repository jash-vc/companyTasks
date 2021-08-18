import React, { useState }  from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Slider from "./Slider";

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
                <Slider/>
            </div>
          {/* <Row> */}
            {/* <Col sm="12"> */}
            {/* </Col> */}
          {/* </Row> */}
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