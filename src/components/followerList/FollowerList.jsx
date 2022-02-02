import { useEffect, useState } from "react";
import axios from "axios";
import "./followerlist.css";
import { Link } from "react-router-dom";

export const FollowerList = () => {
  const [loading, setLoading] = useState(true);
  const [showFollowers, setShowFollowers] = useState([]);
  useEffect(() => {
    (async function () {
      setLoading(true);
      const response = await axios.get(`/api/users`);
      setLoading(false);
      const list = response.data.users[0].followers.filter(
        (obj, index) => index < 5
      );
      setShowFollowers(list);
    })();
  }, []);
  return (
    <div className="follower-list">
      {loading && <p>Loading...</p>}
      <div className="follower-list__heading">
        <h1>Your Followers</h1>
        {!loading && (
          <Link to="/show-all-followers" className="see-all">
            See All
          </Link>
        )}
      </div>
      <ul className="followers">
        {showFollowers.map((obj) => {
          return (
            <li className="followers__profile" key={obj.followerId}>
              <img
                src={`${obj.img}`}
                alt={`user-${obj.followerId}`}
                className="followers__img"
              />
              <a href="/" className="followers__name">
                {obj.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
