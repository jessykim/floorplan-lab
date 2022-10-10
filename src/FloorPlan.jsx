import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
      <div>
        <Kitchen />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bedroom />
      </div>
      <div>
        <Bath />
      </div>
    </>
  )
}

export default FloorPlan