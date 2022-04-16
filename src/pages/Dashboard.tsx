import React from 'react';
import styled from 'styled-components';
interface StylesDictionary {
    [key: string]: React.CSSProperties
}

const MainDiv = styled.div`
    background: #E3F2FD;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding: 20px;
    display: grid;
    grid-template-rows: 2fr 5fr;
    gap: 1rem;
`;

const ResumeCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 10px;
`;

const ResumeCard = styled.div<{ primary?: boolean }>`
    background-color: #5D35B1;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    color: #fff;
    border: 1px solid #CDE7FC;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${props => props.primary && `
        background: #1E88E5;
    `}
`;

const style: StylesDictionary = {
    topBox: {
        // border: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "10px",
    },
    innerCircle: {
        backgroundColor: "#512EA9",
        height: "10rem",
        width: "10rem",
        borderRadius: "50%",
        position: "absolute",
        top: "-5rem",
        right: "-1rem",
        zIndex: "1",
    },
    innerCircle2: {
        backgroundColor: "#4526A0",
        height: "10rem",
        width: "10rem",
        borderRadius: "50%",
        position: "absolute",
        top: "-3rem",
        right: "-5rem",
        zIndex: "2",
    },
}
export const Dashboard = () => {
    return (
        <MainDiv>
            <ResumeCardsContainer>
                <ResumeCard>
                    <div style={{ ...style.innerCircle }}></div>
                    <div style={{ ...style.innerCircle2 }}></div>
                    Dashboard resume card 1
                </ResumeCard>
                <ResumeCard primary>
                    Dashboard resume card 2
                </ResumeCard>
                <ResumeCard style={{
                    backgroundColor: "#FFFFFF",
                    color: "#1E88E5",
                }}>
                    Dashboard resume card 3
                </ResumeCard>

            </ResumeCardsContainer>
            <div style={{
                // border: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                gap: "1rem",
            }}>
                <div style={{
                    width: "80%",
                    backgroundColor: "#FFFFFF",
                    height: "96%",
                    borderRadius: "12px",
                    color: "#1E88E5",
                    border: "1px solid #CDE7FC",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    Big Chart
                </div>
                <div style={{
                    backgroundColor: "#FFFFFF",
                    height: "96%",
                    width: "20%",
                    borderRadius: "12px",
                    color: "#1E88E5",
                    border: "1px solid #CDE7FC",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "1",
                }}>
                    Info Card
                </div>
            </div>


        </MainDiv>
    )
}
