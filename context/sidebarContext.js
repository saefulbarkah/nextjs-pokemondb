import { createContext, useState } from "react";
const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <SidebarContext.Provider
      value={{ openSidebar, setOpenSidebar, handleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
