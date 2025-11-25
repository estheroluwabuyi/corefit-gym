import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import FadeInSection from "../FadeInSection";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MdPinDrop } from "react-icons/md";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function ContactMap() {
  return (
    //  <FadeInSection animation="blur" delay={0.4}></FadeInSection>
    <FadeInSection
      animation="blur"
      delay={0.3}
      className="relative w-full z-5 lg:w-1/2 "
    >
      <MapContainer
        center={[40.6947, -73.9496]}
        zoom={15}
        className="h-[300px] lg:h-[450px]  w-full mt-10 rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.6947, -73.9496]}>
          <Popup
            className="w-[180px] text-[1.2rem] font-medium"
            closeButton={false}
          >
            <MdPinDrop
              size={20}
              className="inline-block mr-1 mb-2 text-red-700"
            />
            CoreFit Gym, 401 West Fitness Ave, Brooklyn, NY 11201, USA
          </Popup>
        </Marker>
      </MapContainer>

      <p className="mt-4 text-center text-[1.2rem] font-medium font-montserrat ">
        <a
          href="https://www.google.com/maps?q=CoreFit+Gym,+401+West+Fitness+Ave,+Brooklyn,+NY+11201,+USA"
          target="_blank"
          rel="noopener noreferrer"
          className="underline! hover:text-text/80! transition-colors! duration-300 "
        >
          <MdPinDrop
            size={20}
            className="inline-block mr-1 text-secondary mb-2"
          />
          CoreFit Gym, 401 West Fitness Ave, Brooklyn, NY 11201, USA
        </a>
      </p>
    </FadeInSection>
  );
}

export default ContactMap;
