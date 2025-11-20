import React from "react";

export default function Maintenance() {
    // Hide navbar and footer
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div
                className="p-10 rounded-xl shadow-lg max-w-lg"
                style={{ backgroundColor: "#FDD835", color: "#333" }} // your original background color
            >
                <h1 className="text-3xl font-bold mb-4">Maintenance in progress</h1>
                <div>

                    <h1>We'll Be Back Soon</h1>
                    <p>We're performing scheduled updates to improve your experience.</p>
                    <p>Please check back in a little while.</p>
                </div>
                <p>Email: <a href="mailto:support@pravinmishra.com" className="underline">support@pravinmishra.com</a></p>
            </div>
        </div>
    );
}
