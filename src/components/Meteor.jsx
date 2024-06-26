
const Meteor = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-90'>
            {[...Array(15).keys()].map(index => {
                const top = Math.round(Math.random() * 100);
                const right = Math.round(Math.random() * 100);

                return (
                    <div
                        className="star w-1 h-1 bg-white absolute rotate-45 rounded-full after:absolute after:w-[2px] after:h-40 after:bg-gradient-to-t after:from-white after:to-transparent after:bottom-full after:left-1/2 after:-translate-x-1/2 before:absolute before:inset-0 before:rounded-full before:scale-[8]"
                        key={index}
                        style={{
                            top: index % 2 ? "0%" : `${top}%`,
                            right: index % 2 ? `${right}%` : "0%",
                            animationDelay: `${index * 1}s`,
                            MozAnimationDelay: `${index * 1}s`,
                            WebkitAnimationDelay: `${index * 1}s`,
                            opacity: 0
                        }}
                    />
                )
            })}
        </div>
    )
}

export default Meteor