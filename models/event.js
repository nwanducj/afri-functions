const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const eventSchema = new mongoose.Schema({


  Episode: {
    Name: String,
    CorporateId: Number,
    Info: String,
    StartDate: Date,
    FinishDate: Date,
    Address: String,
    ParkingInfo: String,
    CorporateName: String,
    CorporateRegId: String,
    CorporateCountryId: Number,
    CorporateCountryName: String,
    CorporateCountryCode: String,
    TicketsSold: Number,
    TicketsCreated: Number,
    EpisodeStatus: Number,
    EpisodeStatusText: String,
    Slug: String,
    StartTime: Date,
    FinishTime: Date,
    TicketPriceSummary: {
      Info: String,
      MinPrice: String,
      MaxPrice: String,
      Currency: String,
      Image: String
    },
    SummaryJSON: {
      Info: String,
      MinPrice: String,
      MaxPrice: String,
      Currency: String,
      Image: String
    },
    CurrencyId: Number,
    Id: Number,
    RecordStatus: Number,
    RecordStatusText: String
  },
  Workshops: [
    {
      Name: String,
      Code: String,
      EpisodeId: Number,
      StartTime: String,
      FinishTime: String,
      EpisodeAddressId: Number,
      Id: Number,
      RecordStatus: Number,
      RecordStatusText: String
    }
  ],
  SocialLinks: [
    {
      Name: String,
      SocialLink: String,
      SocialLinkTypeId: Number,
      EpisodeId: Number,
      SocialLinkTypeName: String,
      SocialLinkTypeDetail: String,
      SocialLinkTypeFull: String,
      Id: Number,
      RecordStatus: Number,
      RecordStatusText: String
    },
    {
      Name: String,
      SocialLink: String,
      SocialLinkTypeId: Number,
      EpisodeId: Number,
      SocialLinkTypeName: String,
      SocialLinkTypeDetail: String,
      SocialLinkTypeFull: String,
      Id: Number,
      RecordStatus: Number,
      RecordStatusText: String
    },
    {
      Name: String,
      SocialLink: String,
      SocialLinkTypeId: Number,
      EpisodeId: Number,
      SocialLinkTypeName: String,
      SocialLinkTypeDetail: String,
      SocialLinkTypeFull: String,
      Id: Number,
      RecordStatus: Number,
      RecordStatusText: String
    }
  ],
  EventImages: [
    {
      Name: String,
      DocId: Number,
      IsDefault: Boolean,
      DocSort: Number,
      DocUrl: String,
      EpisodeId: Number,
      Id: Number,
      RecordStatus: Number,
      CreatedAt: Date,
      UpdatedAt: Date,
      RecordStatusText: String,
      CreatedAtText: String,
      UpdatedAtText: String
    }
  ],
  TicketTypes: [
    {
      Name: String,
      Code: String,
      Price: Number,
      EpisodeId: Number,
      Quantity: Number,
      IsSoldOut: Boolean,
      ReservedQuantity: Number,
      CurrencyId: Number,
      CurrencyName: String,
      TicketsSold: Number,
      EndTicketSale: Date,
      EpisodeName: String,
      EpisodeCorporateId: Number,
      AvailableTickets: Number,
      Id: Number,
      RecordStatus: Number,
      CreatedAt: Date,
      UpdatedAt: Date,
      RecordStatusText: String,
      CreatedAtText: String,
      UpdatedAtText: String
    }
  ]
}, {
  timestamps: true,
});

eventSchema.plugin(paginate);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
