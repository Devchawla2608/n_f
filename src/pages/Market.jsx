import React from 'react'

const Market = () => {
  return (
    <div>Market place</div>
  )
}

export default Market











// // -------------------------- React ---------------------------- //
// import React, { useState } from "react";

// // ----------- Common Section --------------- //
// import CommonSection from "../components/ui/Common-section/CommonSection";

// // ----------- Nft card --------------- //
// import NftCard from "../components/ui/Nft-card/NftCard";

// // -- -------------- NFT Data ----------------- //
// import { NFT__DATA } from "../assets/data/data";

// // ----------- {container , row , col} --------------- //
// import { Container, Row, Col } from "reactstrap";

// // ----------- CSS --------------- //
// import "../styles/market.css";

// const Market = () => {

//     // ====== NFT DATA STATE  =================
//     const [data, setData] = useState(NFT__DATA);

//     // ====== FILTERING DATA BY CATEGORY =================

//     const handleCategory = () => {};

//     // ====== FILTERING DATA BY ITEMS =================
//     const handleItems = () => {};

//   // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
//   const handleSort = (e) => {
//     const filterValue = e.target.value;

//     if (filterValue === "high") {
//       const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

//       setData(filterData);
//     }

//     if (filterValue === "mid") {
//       const filterData = NFT__DATA.filter(
//         (item) => item.currentBid >= 5.5 && item.currentBid < 6
//       );

//       setData(filterData);
//     }

//     if (filterValue === "low") {
//       const filterData = NFT__DATA.filter(
//         (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
//       );

//       setData(filterData);
//     }
//   };

//   return (
//     <>
//         {/* Comman Section */}
//       <CommonSection title={"MarketPlace"} />

//       <section>
//         <Container>
//           <Row>
            
//             {/* Col Contains options of sorting data differently */}
//             <Col lg="12" className="mb-5">
//               <div className="market__product__filter d-flex align-items-center justify-content-between">

//                 {/* Filter Left Box */}
//                 <div className="filter__left d-flex align-items-center gap-5">
//                   <div className="all__category__filter">
//                     <select onChange={handleCategory}>
//                       <option>All Categories</option>
//                       <option value="art">Art</option>
//                       <option value="music">Music</option>
//                       <option value="domain-name">Domain Name</option>
//                       <option value="virtual-world">Virtual World</option>
//                       <option value="trending-card">Trending Cards</option>
//                     </select>
//                   </div>

//                   <div className="all__items__filter">
//                     <select onChange={handleItems}>
//                       <option>All Items</option>
//                       <option value="single-item">Single Item</option>
//                       <option value="bundle">Bundle</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Filter Right */}
//                 <div className="filter__right">
//                   <select onChange={handleSort}>
//                     <option>Sort By</option>
//                     <option value="high">High Rate</option>
//                     <option value="mid">Mid Rate</option>
//                     <option value="low">Low Rate</option>
//                   </select>
//                 </div>

//               </div>
//             </Col>

//             {/* Contains NFT ITEMS */}
//             {data?.map((item) => (
//               <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
//                 <NftCard item={item} />
//               </Col>
//             ))}

            
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Market;
