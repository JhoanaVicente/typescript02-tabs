import { useState } from "react";
import { TabItem } from "./types/types";

interface TabsViewProps {
    items: TabItem[];
    onChange: (item:TabItem) => void;
}
export default function TabsView({items, onChange}: TabsViewProps) {
    
     const [selected, setSelected] = useState<number | null>(
        items.length >= 0 ? 0 : null
    );

    if(selected == null){
        return null;
    }

    return(
        <div>
            <div>
              {items.map((item, index) => (
                    <div>Item</div>
              ))}
            </div>

            <div>
                <div>
                    {items.map((item, index) => (
                        <>{selected == index && <div>Content</div>}</>
                    ))}
                </div>
            </div>
        </div>
    );
    
   
}