import React from 'react'


const bootcamps = new Array(6).fill({
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aut veniam adipisci ipsam."
    // Add more objects as needed
})


const WorkoutSessions = () => {
    return (
        <section className='workout_session'>
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit atque soluta iste eaque quos, aspernatur eveniet necessitatibus pariatur ipsa.
                </p>
                <img src="/public/img5.jpg" alt="workout" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ducimus vitae cumque ipsam.
                </p>
                <div className="bootcamps">
                    {bootcamps.map((camp, index) => (
                        <div key={index}>
                            <h4>{camp.title}</h4>
                            <p>{camp.description}</p>
                            <div className='buttonClass'>
                                <button>View More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkoutSessions