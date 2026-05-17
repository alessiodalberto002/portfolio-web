import { useState } from "react"; // 1. Importiamo useState
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    // 2. Stato per gestire l'inversione dei colori
    const [isInverted, setIsInverted] = useState(false);

    // 3. Stili dinamici in base allo stato
    const blueStyle = {
        color: isInverted ? "#FFFFFF" : "#0066FF",
        transition: "color 0.3s ease"
    };

    const MotionLink = motion(Link);

    const linkStyle = {
        ...blueStyle,
        textDecorationThickness: "2px",
        textUnderlineOffset: "4px",
        transition: "all 0.3s ease",
    };

    // Varianti per l'animazione a comparsa
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        },
    };

    return (
        <motion.div
            className="d-flex flex-column p-4 p-md-5 vh-100"
            style={{
                fontFamily: "Switzer-Regular",
                lineHeight: "1.2",
                // 4. Applichiamo lo sfondo e il colore del testo dinamici con transizione
                backgroundColor: isInverted ? "#0066FF" : "transparent",
                color: isInverted ? "#FFFFFF" : "inherit",
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* 5. Bottone per invertire i colori */}
            <motion.button
                onClick={() => setIsInverted(!isInverted)}
                className="btn align-self-end mb-5 fw-bold px-4 py-2 text-uppercase"
                style={{
                    border: `2px solid ${isInverted ? "#FFFFFF" : "#0066FF"}`,
                    color: isInverted ? "#FFFFFF" : "#0066FF",
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isInverted ? "torna normale!" : "Diventa Blu!"}
            </motion.button>

            {/* Titolo */}
            <motion.h1 className="display-3 fw-bold mb-5" style={blueStyle} variants={itemVariants}>
                Ciao a tutt*,
            </motion.h1>

            <div className="d-flex flex-column gap-5">

                {/* Corpo principale */}
                <motion.h2 className="m-0 p-0 fw-medium fs-1 lh-sm" variants={itemVariants}>
                    sono <span style={blueStyle}>Alessio</span>, progetto cose sul web e non solo. <br className="d-none d-md-block" />
                    Qualcuno mi ha detto che sarebbe stato utile avere una <span className="fw-bold" style={blueStyle}>"vetrina"</span> dove raccogliere tutto il mio percorso, <br className="d-none" />
                    quindi l'ho costruita.
                </motion.h2>

                {/* Info e Contatti */}
                <motion.div className="fs-4 mt-2" variants={itemVariants}>
                    <p className="mb-2">
                        Qui trovi un
                        <MotionLink
                            to="/worklink"
                            className="d-inline-block fw-bold ms-2"
                            style={linkStyle}
                            whileHover={{ scale: 1.05, opacity: 0.8 }}
                        >
                            link
                        </MotionLink> con i miei lavori.
                    </p>
                    <p className="m-0">
                        Per bere un caffè insieme o per un saluto scrivi a: <br className="d-md-none" />
                        <motion.a
                            href="mailto:alessiodalbertodesign@gmail.com"
                            className="fw-bold text-break d-inline-block"
                            style={linkStyle}
                            whileHover={{ x: 5, opacity: 0.8 }}
                        >
                            alessiodalbertodesign@gmail.com
                        </motion.a>
                    </p>
                </motion.div>

                {/* Footer Social */}
                <motion.div className="" variants={itemVariants}>
                    <p className="fs-5 mb-3 ">Per continuare a giudicarmi potete visitare questi profili:</p>
                    <div className="d-flex gap-4">
                        {["linkedin-in", "instagram"].map((icon, index) => (
                            <motion.a
                                key={icon}
                                href={index === 0 ? "https://www.linkedin.com/in/alessiodalberto" : "https://www.instagram.com/iosonoalessioo_/"}
                                target="_blank"
                                rel="noreferrer"
                                className="fs-2 text-decoration-none"
                                style={blueStyle}
                                whileHover={{ y: -5, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className={`fa-brands fa-${icon}`}></i>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Hero;