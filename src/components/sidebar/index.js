import React from 'react';
import './styles.scss';

import { Menu } from 'primereact/menu';

export default class Sidebar extends React.Component{
    
    

    render(){
        let items = [
            {
                label: 'Funcionalidades',
                items: [{label: 'Cadastrar', icon: 'pi pi-fw pi-plus', url: '/form' },
                        {label: 'Listar', icon: 'pi pi-fw pi-trash', url: '/list'} ]
            }, 
            {
                label: 'Account',
                items: [{label: 'Options', icon: 'pi pi-fw pi-cog', url: '/dashboard' },
                        {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', url: '/' } ]
            }
        ];
        
        return(
            <div className="p-col-12 p-lg-3 sidebar">
                <a href="/">
                    <h1>Alicerce</h1>
                </a>

                <Menu model={items} style={{ width: '100%' }} />

            </div>
        )
    }
}