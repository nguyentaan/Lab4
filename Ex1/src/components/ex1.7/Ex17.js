import { useEffect, useState } from "react";
import request from "./request";

function Ex17() {
  const {getAvatar} = request();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar().then((res) => {
      setAvatar(res[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shop-page">
      {avatar && (
        <>
          <div className="title">The Loai</div>
          {Array.isArray(avatar.genres) && (
            <ul className="list-group">
              {avatar.genres.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <div className="title">Tom Tat</div>
          <div>{avatar.synopsis}</div>
          <hr />
          <div className="title">Nam Phat Song</div>
          <div>{avatar.yearsAired}</div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Ex17;
