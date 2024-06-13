export default function Widget() {
    return (
        <div className="min-h-screen text-white bg-zinc-900">
            <header className="flex justify-between items-center p-6 bg-zinc-900 bg-opacity-75">
                <div className="text-2xl font-bold">Arces Digital</div>
                <nav className="space-x-4">
                    <a href="#collaborate" className="bg-white text-black px-4 py-2 rounded-full">Let's Collaborate</a>
                    <button className="p-2">
                        <img src="https://placehold.co/20x20" alt="menu" crossorigin="anonymous">
                    </button>
                </nav>
            </header>
            <section className="text-center p-12">
                <h1 className="text-5xl font-bold mb-6">Innovate. Problem solve. Innovate some more.</h1>
                <img className="mx-auto mb-6" src="https://placehold.co/300x300" alt="3D Cube" crossorigin="anonymous">
                <a href="#collaborate" className="bg-orange-500 text-white px-6 py-3 rounded-full">Let's Collaborate</a>
            </section>
            <div className="flex justify-center items-center p-4 bg-zinc-800 bg-opacity-75">
                <span>This website uses cookies</span>
                <button className="bg-white text-black px-4 py-2 ml-4 rounded-full">Ok</button>
                <a href="#" className="text-orange-500 ml-4">Learn More</a>
            </div>
            <section className="text-center p-12">
                <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
                <div className="flex justify-center space-x-6">
                    <img src="https://placehold.co/100x50" alt="Partner 1" crossorigin="anonymous">
                    <img src="https://placehold.co/100x50" alt="Partner 2" crossorigin="anonymous">
                    <img src="https://placehold.co/100x50" alt="Partner 3" crossorigin="anonymous">
                    <img src="https://placehold.co/100x50" alt="Partner 4" crossorigin="anonymous">
                    <img src="https://placehold.co/100x50" alt="Partner 5" crossorigin="anonymous">
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-between items-center p-12 bg-zinc-800 bg-opacity-75">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-4xl font-bold mb-4">Let's Get Familiar</h2>
                    <p className="text-lg mb-6">We want our business to be family, friends, and U.S.</p>
                    <a href="#get-to-know" className="bg-orange-500 text-white px-6 py-3 rounded-full">Get to Know Arces Digital</a>
                </div>
                <img className="md:w-1/2 p-6" src="https://placehold.co/500x300" alt="Team Meeting" crossorigin="anonymous">
            </section>
            <section className="p-12">
                <h2 className="text-4xl font-bold mb-6">What we are up to</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Design &amp; Web Development for Biopharma</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Web Development in Logistics Industry</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">AI Solutions for Accessibility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Blockchain for Secure Transactions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}