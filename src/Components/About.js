import AboutImage from "../imgs/About.png";

function About() {
    return (
        <section class="bg-white bg-gray-8000">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src={AboutImage} alt="office content 1" />
                </div>
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">About</h2>
                    <p class="mb-4">We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it. We invest more resources than any other  platform in making sure great support from real people is a click away, whenever you need it. than any other  platform in making sure great support from real people is a click away, whenever you need it.</p>
                </div>

            </div>
        </section>

    )
}

export default About;
