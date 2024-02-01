import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { EmailShareButton, EmailIcon } from "react-share";

export default function ListingItem({ listing }) {
  console.log(listing);
  return (
    <div className="bg-primary shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-body">
            {listing.name}
          </p>
          <EmailShareButton
            url={`https://prime-reality.onrender.com/listing/${listing._id}`}
            className="demo"
            subject={"Check out this details!"}
            body={`Please check the property, namely ${listing.name}, is ready to ${listing.type}. The property is located at ${listing.address} and the price is listed for ${listing.regularPrice}$.${listing.description} I thought you might find this page interesting:`}
          >
            <EmailIcon className="h-8 w-8 rounded-full" />
          </EmailShareButton>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green" />
            <p className="text-sm text-green truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-body line-clamp-2">
            {listing.description}
          </p>
          <p className="text-white mt-2 font-semibold ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-secondary flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
