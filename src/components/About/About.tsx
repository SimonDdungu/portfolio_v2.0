
const About = () => {
    return (
        <section id="about" className="py-20 px-5 bg-gray-900">
            <div className="md:max-w-3xl mx-auto ">
                <div className="mb-5">
                    <h2 className="text-3xl text-center font-semibold tracking-wide">About Me</h2>
                </div>

                <div className="space-y-5 tracking-wide font-light md:text-justify text-sm md:text-base">
                    <p>
                        {`
                My journey into coding began during my studies in Computer Science, where I discovered my passion for creating dynamic and
                scalable web applications. Since then, I’ve been working with frameworks like Next.js, React, Tailwind, Node.js and Django to build 
                projects that not only challenge me but also help me learn new concepts and technologies.
                `}
                    </p>
                    <p>
                        {`Currently, I’m pursuing a Bachelor's degree of science in Computer Science. This has given me a deeper understanding of
                algorithms, data structures and the underlying principles of software development. I’m also actively learning new tools and
                frameworks, including Laravel, React Native and Node.js, as I work towards becoming a well-rounded developer capable of handling
                both frontend and backend challenges. I’m also diving into Machine Learning, exploring its potential to build automated and intelligent applications.`}
                    </p>
                    <p>
                        {`
                    I’m passionate about creating clean, efficient and user-friendly web experiences, and I’m excited to continue growing my skills and contributing to meaningful projects.
                    `}
                    </p>
                </div>

            </div>

        </section>

    )
}

export default About