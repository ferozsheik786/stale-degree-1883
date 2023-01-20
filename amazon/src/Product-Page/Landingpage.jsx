import "./Landing.css"
function Landingpage() {
    return (
        <div>
            <img src="https://m.media-amazon.com/images/I/91lQ01zCsjL._SX3000_.jpg"
                style={{ height: "500px", width: "100%" }}
                alt="offer"
            />


            <div style={{
                display: "flex", justifyContent: "space-around",
                marginTop: "-240px", borderRadius: "10px"
            }}>
                <div >
                    <img src="https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                        alt="odd-car" style={{ height: "220px", borderRadius: "10px" }} />
                    <h5 style={{ marginTop: "15px" }}>Iphone-14 Pro Max</h5>
                    <p style={{ marginTop: "-15px", fontSize:"12px" }}>  ₹:1,18,599</p>
                </div>
                <div >
                    <img src="https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                        alt="odd-car" style={{ height: "220px", borderRadius: "10px" }} />
                    <h5 style={{ marginTop: "15px" }}>Iphone-14 Pro </h5>
                    <p style={{ marginTop: "-15px", fontSize:"12px" }}>  ₹:85,599</p>
                </div>
                <div >
                    <img src="https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                        alt="odd-car" style={{ height: "220px", borderRadius:"15px" }} />
                    <h5 style={{ marginTop: "15px" }}>Iphone-14 Pro Plus</h5>
                    <p style={{ marginTop: "-15px", fontSize:"12px" }}>  ₹:1,28,599</p>
                </div>
            </div>

            <div className="Banner" style={{display:"flex", justifyContent:"space-around"}}>


            {/* banner page  01 */}
            <div className="Starts-Mens">
              <h4 style={{color:"grey"}}>Starting ₹199 | Men's fashion</h4>
                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg"
                            alt="Clothing" className="imge" />
                        <p style={{fontSize:"10px"}}>Clothing</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg"
                            alt="Footwear" className="imge" />
                        <p style={{fontSize:"10px"}}>Footwear</p>
                    </div>

                </div>

                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg"
                            alt="watches" className="imge" />
                        <p style={{fontSize:"10px"}}>Watches</p >
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg"
                            alt="Bags" className="imge" />
                        <p style={{fontSize:"10px"}}>Bags & Luggages</p >
                    </div>
                </div>
              <p style={{fontSize:"1rem", textDecoration:"underline" }}>See all offers</p >
            </div>

              {/* banner page 02 */}

            <div className="Starts-Mens">
              <h4 style={{color:"grey"}}>Most searched smartphone series on Amazon</h4>
                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg"
                            alt="Clothing" className="imge" />
                        <p style={{fontSize:"10px"}}>Redmi series starts at @5499</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg"
                            alt="Footwear" className="imge" />
                        <p style={{fontSize:"10px"}}>Samsung Series at @8499 </p>
                    </div>

                </div>

                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg"
                            alt="watches" className="imge" />
                        <p style={{fontSize:"10px"}}>Oneplus series Starts: ₹18,999</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg"
                            alt="Bags" className="imge" />
                        <p style={{fontSize:"10px"}}>IQOO series : ₹12999</p>
                    </div>
                </div>
              <p style={{fontSize:"1rem",  textDecoration:"underline"}}>See all offers</p>
            </div>
                   
                    {/* banner end page 03 */}

                    <div className="Starts-Mens">
              <h4 style={{color:"grey"}}>Starting ₹49 | Books, toys & more</h4>
                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/2L-coupons-PC-1x._SY116_CB615773334_.jpg"
                            alt="Clothing" className="imge" />
                        <p style={{fontSize:"10px"}}>Books Starting At ₹49</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/Buy-2-get-5-off-PC-1x._SY116_CB615773334_.jpg"
                            alt="Footwear" className="imge" />
                        <p style={{fontSize:"10px"}}>Toys Starting at ₹199</p>
                    </div>

                </div>

                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Lifecycle/No-cost-emi-PC-1x._SY116_CB615773334_.jpg"
                            alt="watches" className="imge" />
                        <p style={{fontSize:"10px"}}>Trimmers Starting at ₹349</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/Janart/PC-QC-Jan-art-2023_VG_1x._SY116_CB615983641_.jpg"
                            alt="Bags" className="imge" />
                        <p style={{fontSize:"10px"}}>Gaming Accessories Starting ₹199</p>
                    </div>
                </div>
              <p style={{fontSize:"1rem",  textDecoration:"underline"}}>See all offers</p>
            </div>

            {/* last banner */}

            <div className="Starts-Mens">
              <h4 style={{color:"grey"}}>Starting ₹79 | Home, kitchen & more</h4>
                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_4._SY116_CB617449707_.jpg"
                            alt="Clothing" className="imge" />
                        <p style={{fontSize:"10px"}}>Upto 80% off | Home & decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_6._SY116_CB617449707_.jpg"
                            alt="Footwear" className="imge" />
                        <p style={{fontSize:"10px"}}>Upto 70% off | cooking & Dinning</p>
                    </div>

                </div>

                <div className="detail">
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/OHL/JanART/Hero/1/PC_QuadCard_372X232_1_2x._SY116_CB615571575_.jpg"
                            alt="watches" className="imge" />
                        <p style={{fontSize:"10px"}}>Lawn & Garden</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/JanART/Main/EVENT/PCQC/PC_QuadCard_372X232_1x_8._SY116_CB617449707_.jpg"
                            alt="Bags" className="imge" />
                        <p style={{fontSize:"10px"}}>Upto 70% off | Home Improvement</p>
                    </div>
                </div>
              <p style={{fontSize:"1rem", textDecoration:"underline"}}>See all offers</p>
            </div>
            </div>

            {/* slide bar  */}

            <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/5127aad7-dd20-416f-9909-f49c6ba43c3b.jpg"
             alt="iphone-add" />
             <div style={{height:"80%", width:"100%", background:"whitesmoke", margin:"auto"}}>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg" 
            alt="logo" style={{height:"100%", width:"95%"}} />
             </div>

            {/* sliding Rule  */}

             




            {/* sliding Rule end  */}

             <div style={{height:"80%", width:"100%", background:"#0F1111;", margin:"auto"}}>
            <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4923d2c3-74ef-4550-99ec-d0b6533b5b22.jpg" 
            alt="logo" style={{height:"100%", width:"65%"}} />
             </div>
           
           

        </div>
    )
}
export default Landingpage;