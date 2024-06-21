import { Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage.jsx";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
            <>
                <Routes>
                    <Route path="/portofolio/" element={<ContentPage/>} />
                </Routes>
            </>
    )
}