import React from 'react'
const style = {
    mainDiv:{
        backgroundColor: "#E3F2FD",
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        padding: "20px",
        display: "grid",
        gridTemplateRows: "2fr 5fr",
    },
    topBox:{
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "10px",
    },
    card1: {
        backgroundColor: "#5D35B1", 
        height: "100%", 
        width: "100%" ,
        borderRadius: "12px",
        color: "#fff",
        border: "1px solid #CDE7FC",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card2: {
        backgroundColor: "#1E88E5", 
        height: "100%", 
        width: "100%" ,
        borderRadius: "12px",
        color: "#fff",
        border: "1px solid #CDE7FC",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card3: {
        backgroundColor: "#FFFFFF", 
        height: "100%", 
        width: "100%" ,
        borderRadius: "12px",
        color: "#1E88E5",
        border: "1px solid #CDE7FC",
        fontWeight: "600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}
export const Dashboard = () => {
  return (
    <div style={{...style.mainDiv }}>
        <div style={{ ...style.topBox }}>
            <div style={{ ...style.card1 }}>
                Dashboard resume card 1
            </div>
            <div style={{ ...style.card2 }}>
                Dashboard resume card 2
            </div>
            <div style={{ ...style.card3 }}>
                Dashboard resume card 3
            </div>

        </div>
        <div style={{ border: '1px solid #ccc' }}></div>


    </div>
  )
}
