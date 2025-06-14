import React from "react";

export const Education = () => {
    const educationData = [
        {
            degree: "BSc (Hons) in Computer Science",
            institution: "University of Moratuwa, Sri Lanka",
            year: "2021 - Present",
            description:
                "Specializing in Software Engineering, focusing on full stack web development, and modern technologies.",
        },
        {
            degree: "G.C.E. Advanced Level (Physical Science)",
            institution: "Jaffna Central College, Sri Lanka",
            year: "2018 - 2020",
            description: "Studied Mathematics, Physics, and Chemistry.",
        },
    ];

    return (
        <section
            id="education"
            className="py-16 px-6 bg-card rounded-lg shadow-md max-w-3xl mx-auto my-8"
        >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Education
            </h2>
            <div className="space-y-8">
                {educationData.map((edu, idx) => (
                    <div
                        key={idx}
                        className="bg-background rounded-xl p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.6)] dark:hover:shadow-[0_4px_20px_rgba(167,139,250,0.8)]"
                    >
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-md text-muted-foreground">
                            {edu.institution} <span className="mx-2">|</span> {edu.year}
                        </p>
                        <p className="mt-2 text-sm text-foreground">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
