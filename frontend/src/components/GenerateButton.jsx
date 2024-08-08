/* eslint-disable react/prop-types */
const GenerateButton = ({ title }) => {
    return(
        <section className="max-w-lg my-10 px-6">
            <a className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-800 cursor-pointer">
                {title}
            </a>
        </section>
    );
}

export default GenerateButton;