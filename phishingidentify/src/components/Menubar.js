import React, { useEffect } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "../css/Menubar.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home")
    }, [])

    return (

        <SideNav
            className="p-left-menu"
            onSelect={(selected) => {
                navigate("/" + selected)
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="pi pi-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Inicio
                    </NavText>
                </NavItem>
                <NavItem eventKey="analyse">
                    <NavIcon>
                        <i className="pi pi-search" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Analizar
                    </NavText>
                </NavItem>
                <NavItem eventKey="statistics">
                    <NavIcon>
                        <i className="pi pi-chart-line" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Estadísticas
                    </NavText>
                </NavItem>
                <NavItem eventKey="information">
                    <NavIcon>
                        <i className="pi pi-info-circle" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Información
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact">
                    <NavIcon>
                        <i className="pi pi-user" style={{ fontSize: '1.75em' }} />
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