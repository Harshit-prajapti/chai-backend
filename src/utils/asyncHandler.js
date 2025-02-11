const asyncHandler = (fn) =>{
    (req,res,next) =>{
        Promise.resolve(fn(req,res,next))
        .catch((err) => next(err))
    }
}

export default asyncHandler;

//const asyncHandler = () => {}    //function declaration
//const asyncHandler = (fuct) => () => {}     //higher order function that can accept a function as an argument
//const aysncHandler = (funct)=> async () => {}  //higher oreder async function


// This is an wraper function that will take a function as an
// argument and return a function that will take req,res,next as an
//  argument and will call the function that was passed as an argument and will handle the errro

// const aysncHandler = (fn)=> async (req,res,next) => {
//     try{
//         await fn(req,res,next)
//     } catch(err) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message || 'inetrnal server error'
//         })
//     }
// } 