import React, { useEffect } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "../css/Menubar.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home")
        localStorage.setItem("currentLocation", "home")
        //eslint-disable-next-line
    }, [])

    return (

        <SideNav
            className="p-left-menu"
            onSelect={(selected) => {
                localStorage.setItem("currentLocation", selected)
                navigate("/" + selected)
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav>
                <NavItem eventKey="home" active={(localStorage.getItem("currentLocation") === "home")}>
                    <NavIcon>
                        <i className="pi pi-home p-menu-item" />
                    </NavIcon>
                    <NavText>
                        Inicio
                    </NavText>
                </NavItem>
                <NavItem eventKey="analyse" active={(localStorage.getItem("currentLocation") === "analyse")}>
                    <NavIcon>
                        <i className="pi pi-search p-menu-item" />
                    </NavIcon>
                    <NavText>
                        Analizar
                    </NavText>
                </NavItem>
                <NavItem eventKey="statistics" active={(localStorage.getItem("currentLocation") === "statistics")}>
                    <NavIcon>
                        <i className="pi pi-chart-line p-menu-item" />
                    </NavIcon>
                    <NavText>
                        Estadísticas
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact" active={(localStorage.getItem("currentLocation") === "contact")}>
                    <NavIcon>
                        <i className="pi pi-user p-menu-item" />
                    </NavIcon>
                    <NavText>
                        Contáctanos
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}


export default Menubar;