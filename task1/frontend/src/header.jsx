import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./postview.css";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate= useNavigate()

    const handleredirect=()=>{
    navigate('/post')
  }
  
    return (<>
        <div className="head">
        <h1 className="logo" >InstaClone</h1>
        <CameraAltIcon onClick={handleredirect} className="cam" />
      </div>
    </>)
}

export default Header