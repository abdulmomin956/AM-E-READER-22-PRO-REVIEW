import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ padding: "5px", margin: "2rem", textDecoration: "none", color: match ? "BlueViolet" : "black", fontWeight: "500", borderBottom: match ? "3px solid BlueViolet" : "3px solid #D3D3D3" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;