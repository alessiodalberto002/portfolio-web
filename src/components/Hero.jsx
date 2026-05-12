const Hero = () => {

    const blueStyle = { color: "#0066FF" };

    return (

        <div className="vh-100 d-flex flex-column gap-5 p-5" style={{ maxWidth: "980px", fontFamily: "Switzer-Regular" }}>
            <h1 className="m-0 p-0" style={blueStyle}>
                Ciao a tutt*,
            </h1>

            <h2 className="m-0 p-0">
                sono <span style={blueStyle}>Alessio,</span> disegno cose sul web e non solo. <br />
                Mi è stato consigliato di creare una "vetrina" per i miei lavori e così ho fatto.
            </h2>

            <h3 className="m-0 p-0">
                Qui trovi un <a href="" className="text-decoration-underline" style={blueStyle}>link</a> per i miei lavori. <br />
                Per bere un caffè insieme o per un saluto scrivi a: <a href="mailto:alessiodalbertodesign@gmail.com" className="text-decoration-underline" style={blueStyle}>alessiodalbertodesign@gmail.com</a>
            </h3>

            <div className="">
                <h4 className="m-0 p-0">Per continuare a giudicarmi potete visitare questi profili:</h4>
                <div className="d-flex gap-3">
                    <a href="https://www.linkedin.com/in/alessiodalberto" target="_blank" className="text-dark fs-3"><i style={blueStyle} className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/iosonoalessioo_/" target="_blank" className="text-dark fs-3"><i style={blueStyle} className="fa-brands fa-instagram"></i></a>
                </div>
            </div>


        </div>

    )

}

export default Hero