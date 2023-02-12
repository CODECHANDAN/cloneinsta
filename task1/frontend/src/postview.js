import React, { useEffect } from "react";
import "./postview.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import axios from "axios";

export default function Postview() {

  const [arr, setArr] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://mini-instaclone.onrender.com/posts")
      .then(function (response) {
        // handle success
        console.log(response);
        setArr(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
if(loading)
{
    return <><div style={{display:"flex",justifyContent:"center",alignItems:"center",height:'100vh'}}><img src={require('./images/Loading_icon.gif')}/></div></>
}

  return (
    <>
      <section className="container">
            {arr.map((data, index) => {
                const base64String= btoa(new Uint8Array(data.PostImage.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
          return (
            <div id="boxes" key={data._id}>
              <div className="head-box">
                <span className="name">
                  <b>{data.name}</b>
                </span>
                <span className="city">{data.location}</span>
              </div>
              <MoreHorizIcon className="dots" />
              <img
                className="main-img"
                alt="images"
                src={`data:image/png;base64,${base64String}`}
              />
              <div className="icon">
                <FavoriteBorderIcon />
                <TelegramIcon />
              </div>
              <div className="dates">{data.Date}</div>
              <div className="likes">{data.likes} likes</div>
              <div className="likes">
                <b>{data.description}</b>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
