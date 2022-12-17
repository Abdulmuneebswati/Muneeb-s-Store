import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "./feature.scss"
import "react-circular-progressbar/dist/styles.css"
const Feature = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featureChart">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">RS 220</p>
        <p className="desc">Previous transaction processing. Last payments may not be included</p>
        <div className="summary">
            

        <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                <KeyboardArrowDownOutlined fontSize="small"/>
                    <div className="resultAmount">RS 12.4K</div> 
                </div>
            </div>

            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize="small"/>
                    <div className="resultAmount">RS 12.4K</div> 
                </div>
            </div>

            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                <KeyboardArrowUpOutlined fontSize="small"/>
                    <div className="resultAmount">RS 12.4K</div> 
                </div>
            </div>


        </div>

        
      </div>

    </div>
  )
}

export default Feature
