import Itinerary from "../../models/Itinerary.js";

export default async(req, res, next)=>{
    try{
        let oneItinerary = await Itinerary
        .findOne({_id:req.params._id})
        .select('name price duration tags photo')

        return res.status(200).json({
            success: true,
            message:'itinerary found',
            response: oneItinerary
        })
    }catch (error) {
        next(error);
      }
}