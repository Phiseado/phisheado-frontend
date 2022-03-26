import React from 'react';
import { Menubar } from 'primereact/menubar';
import "../css/HeaderBar.css"

const HeaderBar = () => {
    const items = [
        {
            label: "Inicio",
            icon: "pi pi-home"
        },
        {
            className: "right-start",
            label: "Información",
            icon: "pi pi-info-circle"
        }
    ]

    return (
        <div className="card pb-3">
            <Menubar model={items} />
        </div>
    )
}

export default HeaderBar;