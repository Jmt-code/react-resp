import React from 'react';
import Copyright from '../copyright/Copyright';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                {/* Aquí puedes agregar el contenido del encabezado */}
            </header>
            <main>
                {children}
            </main>
            <footer>
               <Copyright />
            </footer>
        </div>
    );
};

export default Layout;