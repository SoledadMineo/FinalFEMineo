import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { endpoint } from "./Home";
import { useGetData } from "../hooks/UseGetData";


const UserSelected = () => {
    const { login } = useParams();
    const { values } = useGetData(`${endpoint}/${login}`)
    const navigate = useNavigate();

    return (
        <div>
            <h1><center>Profesional</center></h1>
            <div className="container">
                <img src="../../imagen/dentista.png" alt="Profesional"  width="150" height="150" />
                <p>{values?.name}</p>
                <p>{values?.username}</p>
            </div>
        </div>
    )
};

export default UserSelected;