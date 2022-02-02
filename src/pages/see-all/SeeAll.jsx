import axios from "axios";
import { useEffect, useState } from "react";

export const SeeAll = () => {
  const [loading, setLoading] = useState(true);
  const [showFollowers, setShowFollowers] = useState([]);
  useEffect(() => {
    (async function () {
      setLoading(true);
      const response = await axios.get(`/api/users`);
      setLoading(false);
      setShowFollowers(response.data.users[0].followers);
    })();
  }, []);
  return <h1>Followers</h1>;
};
