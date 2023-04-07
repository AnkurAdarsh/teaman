
const IngredientList = (props) => {
    return (
        <div className="p-5">
            <div className="px-2 md:px-12 lg:px-20 xl:px-44 w-full md:max-w-full sm:flex">
                <div className="h-48 sm:h-auto sm:w-1/2 flex-none overflow-hidden bg-cover rounded-t-xl border-amber-400 sm:border-b-2 sm:border-t-2 sm:border-l-2 sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-br-none sm:rounded-tr-none text-center overflow-hidden">
                    <img src={props.image} alt="pics" className="w-full h-full"/>
                </div>
                <div className="sm:w-1/2 border-r-2 border-b-2 border-l-2  border-amber-400 sm:border-l-0 sm:border-t-2 sm:border-amber-400 bg-white rounded-b-xl sm:rounded-b-none sm:rounded-r-xl p-4 flex flex-col leading-normal">
                    <div className='px-3 flex justify-between'>
                        {/* <i className='fa fa-bars'></i> */}
                        <p class="text-xl text-blue-600 flex items-center">{props.cost}</p>
                        <img src={props.type} alt="image3" className='w-8'></img>
                    </div>
                    <div className="p-3 lg:p-5">
                        <span className='py-1 md:py-5 text-3xl font-bold grid md:text-center text-amber-800 font-raleway'>{props.name}</span>
                        <hr className="h-px"/>
                        <span className='py-1 md:py-3 text-sm lg:text-lg font-light grid md:text-center text-slate-800 font-raleway'>{props.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export {IngredientList};