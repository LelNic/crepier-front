import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import moment from "moment";
import "./Profile.css";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [userInfos, setUserInfos] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${user.id}`).then(({ data }) => {
            setUserInfos(data);
        });
    }, [user]);

    return (
        <div className="Profile">
            <h2>Profil de : {userInfos?.firstname + " " + userInfos?.lastname}</h2>

            <h3>Modifier Infos</h3>
            <input type="text" placeholder="email" value={userInfos?.email} />
            <input type="password" placeholder="password" />

            <h3>Infos facultative</h3>

            <p>{userInfos?.phone}</p>
            <p>{moment(userInfos?.birthdate).format("l")}</p>

            <Link to="/user/adresses">Mes Adresses</Link>
        </div>
    );
};

export default Profile;
