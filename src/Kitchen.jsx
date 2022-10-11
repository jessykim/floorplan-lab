import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <>
      <div className="">
        <div id="oven"><Oven /></div>
        <div id="sink"><Sink /></div>
      </div>
      <div>
        <p>Kitchen</p>
      </div>
    </>
  )
}

export default Kitchen