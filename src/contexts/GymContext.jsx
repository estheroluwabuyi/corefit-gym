import { createContext, useContext, useState } from "react";
import { equipmentItems } from "../utils/equipmentList";
import { contactInfo } from "../utils/contactPageInfo";

const GymContext = createContext();

function GymProvider({ children }) {
  const [equipments, setEquipments] = useState(equipmentItems);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [containerActive, setContainerActive] = useState(null);

  // Format USD
  const formatUSD = (amount) =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <GymContext.Provider
      value={{
        equipments,
        setEquipments,
        hoveredItemId,
        setHoveredItemId,
        containerActive,
        setContainerActive,
        contactPage: contactInfo,
        formatUSD,
      }}
    >
      {children}
    </GymContext.Provider>
  );
}

function useGym() {
  const context = useContext(GymContext);
  if (context === undefined)
    throw new Error("useGym must be used within a GymProvider");
  return context;
}

export { GymProvider, useGym, GymContext };
