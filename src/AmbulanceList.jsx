import React, { useState } from "react";
import "./AmbulanceList.css";

const ambulanceData = [
  { name: "Asha Ambulance Services", address: "B/152, P C Colony Rd, Kankarbagh, Patna, Bihar 800020", hours: "Open 24 hours", phone: "093346 91234" },
  { name: "Patna Ambulance", address: "Budh Vihar, Fraser Road Area, Patna, Bihar 800001", hours: "Open 24 hours", phone: "062025 74847" },
  { name: "Panchmukhi Air Ambulance Services In Patna", address: "Patna Airport - Ashiana More Rd, Maner, Patna, Bihar 800014", hours: "Open 24 hours", phone: "070705 69742" },
  { name: "Panchmukhi Air & Train Ambulance Services Pvt. Ltd.", address: "Om Complex, SP Verma Rd, Near Exition Road, Old Jakkanpur, Lodipur, Patna, Bihar 800001", hours: "Open 24 hours", phone: "070705 69742" },
  { name: "Emergency Ambulance Services | EAS in Patna", address: "355-B, Sheikhpura Bagicha, Sheikhpura, Patna, Bihar 800014", hours: "Open 24 hours", phone: "081028 40694" },
  { name: "Sunshine Ambulance Service", address: "A-220, AG Colony, Patna, Bihar 800025", hours: "Open 24 hours", phone: "097099 11054" },
  { name: "AyuSewa Ambulance Service", address: "E-78, P.C.Colony, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020", hours: "Open 24 hours", phone: "088174 25685" },
  { name: "Mishra Ambulance Service", address: "B/17, near Lohiya Park, Housing Board Colony, East Indira Nagar, Kankarbagh, Patna, Bihar 800020", hours: "Open 24 hours", phone: "097986 79851" },
  { name: "Rohit ICU Ambulance", address: "House no-cc45, Doctors Colony, Kankarbagh, Patna, Bihar 800020", hours: "Open 24 hours", phone: "079033 96431" },
  { name: "Jeevan Rakshak Ambulance Service", address: "43 Guru Shyam Lal Nagar, Ashiyana Nagar, Bailey Rd, near Paras Hospital, Patna, Bihar 800025", hours: "Open 24 hours", phone: "070919 52706" },
  { name: "Aadarsh Ambulance Service", address: "G -72, P C Colony Rd, near Manju Sinha Smriti Park, RBI Flats Colony, Bankman Colony, Patna, Bihar 800020", hours: "Open 24 hours", phone: "091134 94586" },
  { name: "Hind Ambulance Service Patna", address: "G9, Gorakhnath complex, 01, Boring Canal Rd, Anandpuri, Patna, Bihar 800001", hours: "Open 24 hours", phone: "8292085613" },
  { name: "AARADHYA AMBULANCE SEVA", address: "2b, Rajendra Nagar Main Rd, Rajendra Nagar, Patna, Bihar 800016", hours: "Open 24 hours", phone: "8789550944" },
  { name: "Ansh Air & Train Ambulance Service", address: "PMCH Emergency Gate, inside Maa Durga Medico Shop, Lalbagh, Patna, Bihar 800004", hours: "Open 24 hours", phone: "086172 02003" },
  { name: "Ambulance Service Patna", address: "Sector-E, Housing Board Colony, Patna, Bihar 800020", hours: "Open 24 hours", phone: "062018 11440" },
  { name: "Tridev Ambulance Services", address: "G128, P C Colony Rd, beside Orion Optics, opp. Yamaha Showroom, RBI Flats Colony, Bankman Colony, Patna, Bihar 800020", hours: "Open 24 hours", phone: "070707 63810" }
];

const AmbulanceSearch = () => {
  const [query, setQuery] = useState("");
  const [filteredAmbulances, setFilteredAmbulances] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setFilteredAmbulances([]);
    } else {
      const results = ambulanceData.filter(
        (ambulance) =>
          ambulance.name.toLowerCase().includes(value) ||
          ambulance.address.toLowerCase().includes(value)
      );
      setFilteredAmbulances(results);
    }
  };

  return (
    <div className={`ambulance-container ${query ? "borderless" : ""}`}>
      <img id="img1" src="\Ambulance2.png"></img>
      <h2>Call Your Ambulance</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for an ambulance..."
          value={query}
          onChange={handleSearch}
        />
    </div>
    <img id="img2" src="\Img3.png"></img>
      {filteredAmbulances.length > 0 && (
        <div className="ambulance-list">
          {filteredAmbulances.map((ambulance, index) => (
            <div className="ambulance-card" key={index}>
              <h3>{ambulance.name}</h3>
              <p><strong>Address:</strong> {ambulance.address}</p>
              <p><strong>Hours:</strong> {ambulance.hours}</p>
              <p><strong>Phone:</strong> {ambulance.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AmbulanceSearch;



// Testing Git tracking
