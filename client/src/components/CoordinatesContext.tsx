import React, { ReactNode, createContext, useContext, useState } from "react";

interface PositionProviderProps {
  children: ReactNode;
}

interface Coordinates {
  x: number;
  y: number;
}

interface PositionContextType {
  clickCoordinates: Coordinates;
  click: (coordinates: Coordinates) => void;
}

const PositionContext = createContext<PositionContextType | undefined>(
  undefined
);

export const PositionProvider: React.FC<PositionProviderProps> = ({
  children,
}) => {
  const [clickCoordinates, setClickCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  const click = (coordinates: Coordinates) => {
    console.log(coordinates);
    setClickCoordinates(coordinates);
  };

  const contextValue: PositionContextType = {
    clickCoordinates,
    click,
  };

  return (
    <PositionContext.Provider value={contextValue}>
      {children}
    </PositionContext.Provider>
  );
};

export const usePosition = (): PositionContextType => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error("usePosition must be used within a PositionProvider");
  }
  return context;
};
