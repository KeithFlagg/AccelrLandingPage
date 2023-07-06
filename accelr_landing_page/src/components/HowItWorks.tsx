import React from "react";
import arrow from "../icons/arrow-right.png"

export const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <div className="how-it-works-container container mx-auto flex flex-col justify-center items-center">
                <span className="how-it-works-header font-semibold text-3xl text-center">
                    How it works
                </span>
                <span className="how-it-works-caption text-center">
                    Accelr helps you streamline product development. Request a task in your<br /> dashboard, and view the results and iterate to build your product!
                </span>
            </div>

            <div className="action-cards-container flex justify-center items-center">
                <div className="subscribe flex flex-col justify-center items-center">
                    <span className="action-card-header font-semibold">
                        Subscribe to Accelr
                    </span>
                    <div style={{textAlign: "center"}}>
                        <span className="action-card-caption font-medium">
                            Start by subscribing to Accelr and meet with us so<br /> we can better understand your requirements and<br /> kick off your project.
                        </span>
                    </div>
                    <div className="card-link-container">
                        <div className="action-card-link font-semibold">
                        Book a call with us
                        </div>
                        <img src={arrow.src} alt="arrow" className="arrow-icon"/>
                    </div>
                </div>
                <div className="request flex flex-col justify-center items-center">
                    <span className="action-card-header font-semibold">
                        Request tasks any time
                    </span>
                    <div style={{textAlign: "center"}}>
                        <span className="action-card-caption font-medium">
                            Request as many tasks as you would like, and add<br /> unlimited team members. We will complete them<br /> one by one.
                        </span>
                    </div>
                    <div className="card-link-container">
                        <div className="action-card-link font-semibold">
                        Book a call with us
                        </div>
                        <img src={arrow.src} alt="arrow" className="arrow-icon"/>
                    </div>
                </div>
                <div className="receive flex flex-col justify-center items-center">
                    <span className="action-card-header font-semibold">
                        Receive and iterate
                    </span>
                    <div style={{textAlign: "center"}}>
                        <span className="action-card-caption font-medium">
                            Receive your designs or view your new features in<br /> app. We are committed to iterating until you are<br /> 100% satisfied.
                        </span>
                    </div>
                    <div className="card-link-container">
                        <div className="action-card-link font-semibold">
                        Book a call with us
                        </div>
                        <img src={arrow.src} alt="arrow" className="arrow-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
