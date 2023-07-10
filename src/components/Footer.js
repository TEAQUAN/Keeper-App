const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    const footer = {
    position: "absolute",
    textAlign: "center",
    bottom: "0",
     width: "100",
    height: "2.5rem",     
    background: "#ccc",
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    margin: "16px",
    float: "left",
    }
    const prgp = {
        color: "black",
    }
    return (
        <div>
        <footer style={footer}>
            <p style={prgp}>copyright {year}</p>
        </footer>
        
        </div>
    )
}
export default Footer