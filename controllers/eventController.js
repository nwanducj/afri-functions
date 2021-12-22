const {
    logger
} = require("../helpers/logger");
const Event = require("../models/event");

exports.getEvents = async (req, res) => {
    try {
        logger.debug("getting events...");

        let query = {};
        let sort = {}


        sort.createdAt = -1

        let page = req.query.page ? req.query.page : 1;
        let count = req.query.count ? req.query.count : 6;

        const events = await Event.paginate(query, {
            limit: count,
            page: page,
            sort: sort,
        });

        return res.status(200).json({
            error: false,
            message: "Event Retrieved Successfully!",
            data: {
                events
            }
        })
    } catch (e) {
        logger.error("🔥 error: %o", e);
        return res.status(500).json({
            error: true,
            message: "Something went wrong, could not get events.",
        });
    }
}
exports.getEventById = async (req, res) => {
    try {
        logger.debug("getting events...");
        const event = await Event.findById(req.params.id)

        return res.status(200).json({
            error: false,
            message: "Event Retrieved Successfully!",
            data: {
                event
            },
        })
    } catch (e) {
        logger.error("🔥 error: %o", e);
        return res.status(500).json({
            error: true,
            message: "Something went wrong, could not get events.",
        });
    }
}