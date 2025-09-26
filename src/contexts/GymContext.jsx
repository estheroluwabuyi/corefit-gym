import { createContext, useContext, useState } from "react";

import { equipmentItems } from "../utils/equipmentList";

const GymContext = createContext();

function GymProvider({ children }) {
  const [equipments, setEquipments] = useState(equipmentItems);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [containerActive, setContainerActive] = useState(null);

  return (
    <GymContext.Provider
      value={{
        equipments,
        setEquipments,
        hoveredItemId,
        setHoveredItemId,
        containerActive,
        setContainerActive,
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
