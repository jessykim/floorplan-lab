import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
      <div id="top">
        <div className="stacked left">
          <div className="bedroom" id="bed1"><Bedroom bedNum='1' /></div>
          <div className="bathroom"><Bath size='Full' /></div>
        </div>
        <div id="living-room"><LivingRoom /></div>
        <div className="stacked" id="kitchen"><Kitchen /></div>
      </div>
      <div id="bottom">
        <div className="bedroom"><Bedroom bedNum='2' /></div>
        <div className="bathroom"><Bath size='Half' /></div>
        <div className="bedroom"><Bedroom bedNum='3' /></div>
      </div>
    </>
  )
}

export default FloorPlan