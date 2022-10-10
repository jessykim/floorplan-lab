import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
      <div><Kitchen /></div>
      <div><LivingRoom /></div>
      <div><Bedroom bedNum='1' /></div>
      <div><Bedroom bedNum='2' /></div>
      <div><Bedroom bedNum='3' /></div>
      <div><Bath size='Half' /></div>
      <div><Bath size='Full' /></div>
    </>
  )
}

export default FloorPlan