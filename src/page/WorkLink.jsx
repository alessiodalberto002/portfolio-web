import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Crea la versione animata del Link per tornare indietro
const MotionLink = motion(Link);

const WorkLink = () => {
    const blueStyle = { color: "#0066FF" };

    const backLinkStyle = {
        ...blueStyle,
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
    };

    return (
        <motion.div
            className="p-4 p-md-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "Switzer-Regular" }}
        >
            {/* Tasto Indietro animato */}
            <div className="mb-5">
                <MotionLink
                    to="/"
                    style={backLinkStyle}
                    whileHover={{ x: -5, opacity: 0.8 }} // Si sposta a sinistra al passaggio del mouse
                    whileTap={{ scale: 0.95 }}
                >
                    ← Torna alla Home
                </MotionLink>
            </div>

            {/* Il tuo blocco di codice originale */}
            <div className="d-flex align-items-center gap-2 fs-4">
                <motion.a
                    href="https://www.giuggiolacreativa.it/"
                    target="_blank"
                    rel="noreferrer"
                    style={blueStyle}
                    className="fw-bold text-decoration-none"
                    whileHover={{ y: -2, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    giuggiolacreativa.it
                </motion.a>
                <p className="m-0">- Studio Creativo</p>
            </div>

            <div className="d-flex align-items-center gap-2 fs-4">
                <motion.a
                    href="https://portfolio-saretta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={blueStyle}
                    className="fw-bold text-decoration-none"
                    whileHover={{ y: -2, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    saramolino.it
                </motion.a>
                <p className="m-0">- Portfolio Digitale</p>
            </div>
        </motion.div>
    );
};

export default WorkLink;