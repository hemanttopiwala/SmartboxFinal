import './featuredInfo.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  const location = useLocation();

  const id = location.pathname.split('/')[2];

  console.log(id);

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/api/users/find/' + id
        );
        setUser(res.data);
      } catch (err) {}
    };
    getUser();
  }, [id]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">{user.username}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">{user.email}</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">DeliveryBox</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Box1</span>
         
        </div>
        <span className="featuredSub">id=3</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
