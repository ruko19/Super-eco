import RecycleTarget from "../layouts/RecycleTarget/RecycleTarget"

const Home = () => {
    return (
        <>
            <div className="w-full text-center">
                <div className="max-w-screen-lg m-auto">
                    <h2 className="text-7xl font-bold mb-11">¿QUE HACEMOS <br />Y COMO LO <span className="text-lime-500">HACEMOS ?</span></h2>
                    <p className="leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi optio iusto tempore minima quam expedita? Autem molestiae architecto quis adipisci est! Repellendus, fugit accusamus. Alias, eaque unde? Laudantium, voluptas.</p>
                </div>
                <section className="w-full  bg-lime-500 grid grid-cols-2">
                    <RecycleTarget />
                    <RecycleTarget />
                    <RecycleTarget />
                    <RecycleTarget />

                </section>
            </div>
        </>
    )
}

export default Home
