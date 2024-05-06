import { useEffect, useState } from "react";
import MeetSectionCrud from "./MeetSectionCrud";

const MeetSection = () => {
    const [temMembers,setTemMembers] = useState([]);


    useEffect(()=>{
        fetch('./meet.json')
        .then(res=>res.json())
        .then(data=>setTemMembers(data))
    },[])
    return (
        <div className="mt-10">
            <div className="text-center space-y-2">
                <h4 className="text-primary font-semibold">Team</h4>
                <h2 className="text-2xl font-bold">Meet Our Team</h2>
                <p className="max-w-xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    temMembers.map(((temMember,idx)=><MeetSectionCrud 
                    key={idx}
                    temMember={temMember}
                    ></MeetSectionCrud>))
                }
            </div>
        </div>
    );
};

export default MeetSection;