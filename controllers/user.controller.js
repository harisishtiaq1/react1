exports.add=async(req,res,next)=>{
    try{
        console.log("req body" , req.body);
    let payload=req.body;
    console.log("file", req);
    return res.send(
        {
        success:true,
        payload,
        message:"user Created Successfully" 
        }
    )
    }
    catch(error){
        next(error);
    }
}
exports.list=async(req,res,next)=>{
    try{
        const list=[
            {
                id:1,
                firstname:"Haris",
                lastname:"Ishtiaq",
                gmail:"harisishtiaq195@gmail.com"
            },
            {
                id:2,
                firstname:"arslan",
                lastname:"Akmal",
                gmail:"arxl64@gmail.com"
            }
        ]
        return res.send({
            message:"user list has been successfully fetched",
            status:true,
            data:list
         })
    }
    catch(error){
        next(error);
    }
}