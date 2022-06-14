import "../css/Menu.css";
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: "Inicio",
            icon: 'pi pi-home',
            command: () => {
                navigate("/home")
            }
        },
        {
            label: "Analizar",
            icon: 'pi pi-search',
            command: () => {
                navigate("/analyse")
            }
        },
        {
            label: "Estadísticas",
            icon: 'pi pi-chart-line',
            command: () => {
                navigate("/statistics")
            }
        },
        {
            label: "Sobre nosotros",
            icon: 'pi pi-user',
            command: () => {
                navigate("/contact")
            }
        }
    ];
    return (
        <div>
            <Menubar model={items} />
        </div>
    )
}

export default Menu;
