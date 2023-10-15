import Icon39 from "../imgs/Frame 39.png"
import Icon40 from "../imgs/Frame 40.png"
import Icon41 from "../imgs/Frame 41.png"

function Count() {
    return (
        <section className="bg-white bg-gray-8000 relative">
            <div className="py-8 px-4 mx-auto gap-3 max-w-screen-xl lg:gap-8  lg:py-16 lg:grid-cols-1222 flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl fhgs">
                    <img src={Icon39} alt="ss" />
                    <strong className="text-2xl ">$30B <p className="text-sm md:text-base">Digital Currency Exchanged</p></strong>
                </div>
                <div className="flex flex-wrap gap-3 justify-between items-center mx-auto max-w-screen-xl fhgs">
                    <img src={Icon40} alt="ss" />
                    <strong className="text-2xl ">10M+ <p className="text-sm md:text-base">Trusted Wallets Investor</p></strong>
                </div>
                <div className="flex flex-wrap gap-3 justify-between items-center mx-auto max-w-screen-xl fhgs">
                    <img src={Icon41} alt="ss" />
                    <strong className="text-2xl ">195 <p className="text-sm md:text-base">Countries Supported</p></strong>
                </div>
            </div>

        </section >
    )
}
export default Count;
