import { createContext, useContext, useMemo, useState } from "react";

import { equipmentItems } from "../utils/equipmentList";
import { contactInfo } from "../utils/contactPageInfo";

const GymContext = createContext();

function GymProvider({ children }) {
  const [equipments, setEquipments] = useState(equipmentItems);
  const contactPage = contactInfo;
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [containerActive, setContainerActive] = useState(null);

  const value = useMemo(() => {
    return {
      equipments: equipments,
      setEquipments: setEquipments,
      hoveredItemId: hoveredItemId,
      setHoveredItemId: setHoveredItemId,
      containerActive: containerActive,
      setContainerActive: setContainerActive,
      contactPage: contactPage,
    };
  }, [contactPage, containerActive, equipments, hoveredItemId]);

  return <GymContext.Provider value={value}>{children}</GymContext.Provider>;
}

function useGym() {
  const context = useContext(GymContext);
  if (context === undefined)
    throw new Error("useGym must be used within a GymProvider");

  return context;
}

export { GymProvider, useGym, GymContext };
