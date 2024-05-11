const DotsLoader = () => (
    <div className="w-24 max-[350px]:w-16 max-[300px]:w-12 h-12 relative">
        <div className="w-3 h-3 max-[350px]:w-2 max-[350px]:h-2 max-[300px]:w-1 max-[300px]:h-1 absolute z-[1] rounded-full bg-violet-800 left-[15%] origin-[50%] circle-animation" />
        <div className="w-3 h-3 max-[350px]:w-2 max-[350px]:h-2 max-[300px]:w-1 max-[300px]:h-1 absolute z-[1] rounded-full bg-violet-800 origin-[50%] circle-animation left-[45%]" />
        <div className="w-3 h-3 max-[350px]:w-2 max-[350px]:h-2 max-[300px]:w-1 max-[300px]:h-1 absolute z-[1] rounded-full bg-violet-800 origin-[50%] circle-animation right-[15%] left-auto" />
        <div className="w-3 h-1 max-[350px]:w-2 max-[350px]:h-[2px] max-[300px]:w-1 max-[300px]:h-[1px] rounded-full bg-tertiary absolute top-[42px] max-[350px]:top-[32px] max-[300px]:top-[30px] origin-[50%] left-[15%] blur-[1px] shadow-animation" />
        <div className="w-3 h-1 max-[350px]:w-2 max-[350px]:h-[2px] max-[300px]:w-1 max-[300px]:h-[1px] rounded-full bg-tertiary absolute top-[42px] max-[350px]:top-[32px] max-[300px]:top-[30px] origin-[50%] left-[45%] blur-[1px] shadow-animation" />
        <div className="w-3 h-1 max-[350px]:w-2 max-[350px]:h-[2px] max-[300px]:w-1 max-[300px]:h-[1px] rounded-full bg-tertiary absolute top-[42px] max-[350px]:top-[32px] max-[300px]:top-[30px] origin-[50%] blur-[1px] shadow-animation right-[15%] left-auto" />
    </div>
)

const ScreenLoader = () => {
    return (
        <main className="bg-primary w-screen h-screen flex items-center justify-center select-none">
            <section className="flex flex-col items-center gap-y-3 max-[350px]:gap-y-2 max-[300px]:gap-y-1">
                <h1 className="flex items-center text-4xl max-[400px]:text-3xl max-[350px]:text-2xl max-[300px]:text-xl text-violet-600">Loading Content <DotsLoader /></h1>
                <p className="text-violet-100 font-black stroke-text text-lg max-[350px]:text-sm max-[300px]:text-xs">Please wait...</p>
            </section>
        </main>
    )
}

export default ScreenLoader