import React from 'react'
import { Link } from "react-router-dom"
export const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; Bijay Neupane. All rights reserved 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}
