import React, { useContext, useEffect, useState } from 'react';
import "./PlaceOrder.css"
import { Grid} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';

function PlaceOrder(props){

    const {item,size,increment} = useContext(CartContext);
    const [productDetails,setProductDetails] = useState([]);
    let {id} = useParams();

    const addToCart=function(){
        increment(productDetails);
    }

    useEffect(()=>{
        let list=[
            {
                "id": 101,
                "name":"Iphone 10",
                "rating":"4789",
                "review":"1000",
                 "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                 "price":"23496",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                 "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/apple_12_mini__crwfIEmx.PNG?updatedAt=1639760891249",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]
            },
            {
                "id": 102,
                "name":"Iphone 11",
                "rating":"5789",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"45677",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/Apple__iphone_11_ZDZN-tmJH7w.PNG?updatedAt=1639762464605",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"                
                ]
            },
            {
                "id":103,
                "name":"Iphone 12",
                "rating":"2345",
                 "review":"2000",
                 "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                 "price":"34256",
                 "status":"In stock",
                 "soldby":"Appario Retail Private Ltd",
                 "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iphone_12_wMD09rNdfY.PNG?updatedAt=1639760891497",
                "about": ["6.7-inch (17 cm diagonal) Super Retina XDR display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording","LiDAR Scanner for improved AR experiences, Night mode portraits","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"
                ]
            },
            {
                "id": 104,
                "name":"Iphone 13",
               "rating":"1679",
               "review":"2000",
               "emi":"2401",
               "delivery":"Wednesday, Aug 18",
               "price":"160980",
               "status":"In stock",
               "soldby":"Appario Retail Private Ltd",
               "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/black_LF3XWS04Sxr.PNG?updatedAt=1639900923388",
               "about": ["17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster and more responsive feel","Cinematic mode adds shallow depth of field and shifts focus automatically in your videos","Pro camera system with new 12MP Telephoto Wide and 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording"
               ]   
            },
            
            {
                "id": 105,
                "name":"OnePlus",
                "rating":"1679",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"160980",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__eY0zeJywGm.webp?updatedAt=1639653714192",
                "about": [ 
                "Connectivity: Dual SIM (nano + nano) | Currently supports dual 5G SIM Cards",
                "Operating System: OxygenOS 11.3 operating system based on Android 11",
                "Battery: Dual Cell 4500mAH lithium-ion batteryield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone"
                ]  
            },
            {
                "id": 106,
                "name":"OnePlus",
                "rating":"3456",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"16770",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__7xBjnkAAiF.webp?updatedAt=1639653714542",
                "about": [ "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps","6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system", "Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM"
                ]   
            },
            {
                "id": 107,
                "name":"Samsung Galaxy M52 5G",
                "rating":"8907",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"13670",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/sansung_5g_wJg8kZ0RhAn.PNG?updatedAt=1639893723040",
                "about": ["48MP+8MP+5MP Triple camera setup-48MP (F 2.0) main camera + 8MP (F2.2) Ultra wide camera + 5MP (F2.2) depth camera | 20MP (F2.2) front camera",
                "Monster 6000 mAh Battery | Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 512GB| SIM 1 + SIM 2 + MicroSD",
                "Android 11, OneUI 3.1 Core operating system with Exynos 9611 Octa Core Processor 2.3GHz,1.7GHz"
                ]

            },
            {
                "id": 108,
                "name":"OPPO A55", 
                "rating":"1747",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"14550",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/oppo_a55_psPpt4FlZ.PNG?updatedAt=1639893721944",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]    

            },
            {
                "id": 109,
                "name":"OPPO F19",
                "rating":"93623",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"56083",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/oppo_f19_mN8yVMbNhK.PNG?updatedAt=1639893722652",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]    
            },
            {
                "id": 110,
                "name":"Vivo Y33s (Middday Dream)", 
                "rating":"7885",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"134455",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/vivo_y33s_cty1xmhnO.PNG?updatedAt=1639893723626",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]
            },
            {
                "id": 111,
                "name":"Redmi 9 Activ (Carbon Black,4GB RAM)", 
                "rating":"8890",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"164873",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/Redmi_9_XegQQa6Im.PNG?updatedAt=1639893723678",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]     

            },
            {
                "id": 112,
                "name":"Redmi Note 10 Lite (Glacier White, 4GB RAM)", 
                "rating":"15479",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"16098",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/mi_note_7SbAQ-pFU.PNG?updatedAt=1639893721325",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]   

            },
            {
                "id": 113,
                "name":"Xiaomi 11 Lite NE 5G (Jazz Blue)",
                "rating":"1345",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"16769",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/Xiaomi_hVGjnukN39.PNG?updatedAt=1639893723672",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]

            },
            {
                "id": 114,
                "name":"OnePlus 9 Pro 5G (Morning Mist, 12GB RAM)", 
                "rating":"17676",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"112345",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/one_plus_9_JgcDVZYvsLc.PNG?updatedAt=1639893721736",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]

            },
            {
                "id": 115,
                "name":"OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM)", 
                "rating":"16787",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"156673",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/one_plus_nord_w6eL20-GrX.PNG?updatedAt=1639893723173",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]

            },
            {
                "id": 116,
                "name":"iQOO 7(Monster Orange,8GB RAM)", 
                "rating":"167957",
                "review":"2000",
                "emi":"2401",
                "delivery":"Wednesday, Aug 18",
                "price":"16000",
                "status":"In stock",
                "soldby":"Appario Retail Private Ltd",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iqoo_QDe2s0MBZ.PNG?updatedAt=1639893722915",
                "about": [ "6.1-inch (15.5 cm diagonal) Super Retina XDR- display","Ceramic Shield, tougher than any smartphone glass","A14 Bionic chip, the fastest chip ever in a smartphone","Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording","12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recordingIndustry-leading IP68 water resistance","Supports MagSafe accessories for easy attachment and faster wireless charging","iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"
                ]

            },
            {
                "id": 117,
                "name" : "Fashion Bag",
                "rating":"45665",
                "price":"500",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/bag_QUooRye5GsD.jpg?updatedAt=1640787045518",
                "about":["COMPATIBLE WITH 15.6 INCH LAPTOP”: The Northzone Backpack fits up to 15.6 inch laptop. Dimensions: 34cm x 15cm x 45.5cm; Weight: 499g; HIGH QUALITY, DURABLE AND WATER REPELLANT FABRIC”: This backpack features in durable snow yarn polyester fabric and streamlined design with a padded interior to protect notebooks and important items"
                ]
            },
            {
                "id": 118,
                "name" : "Maybelline liquid lipstick",
                "rating":"965",
                "price":"700",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/lipstick2_SjB0Jq_Ys.jpg?updatedAt=1640787050620",
                "about":["Superstay Matte Ink Liquid Lipstick leaves your lips with a flawless matte finish that will last for up to 16 hours","The lipstick features a unique arrow applicator for a more precise liquid lipstick application","Intensely Pigmented formula Long-Lasting and doesn't dry out lips"
                ]
            },
            {
                "id": 119,
                "name": "Head Set",
                "rating":"8925",
                "price":"1500",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/headset_pmSzw4jKF.jpg?updatedAt=1640787048357",
                "about":["Extra Bass - Boult’s sound signature has been packed with extra punchy and deep bass with accentuates the warm midst and crystal clear sparky highs Transmission Distance 20m. Driver Size 50 mm","Padded Cushioning Comfort - Unparalleled Comfort and Portable design. With ergonomic design and ultra-soft ear cups, our Bluetooth headphones ensure all-day listening comfort. Enjoy your music on the go",
                 ]
            },
            {
                "id": 120,
                "name" : "Yasmika Sarees",
                "rating":"225",
                "price":"1000",
                "image":"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/saree3_cbhbAj16C.jpg?updatedAt=1640787053835",
                "about":["Care Instructions: Machine Wash","Fit Type: Regular","Color Name: Beige","Fabric: Art Silk","The length of the Saree is 5.5 mtrs and Blouse is 0.80 mtrs","Wash Care: Hand wash & dry wash but requested not to use hard brush on the fabric",
                ]
            },
            {

            }
           
        ]
        let item = list.filter( item => {
            if(item.id== id) return item;

        })
        console.log(item);
        setProductDetails(item[0]);
    },[]);

    return(
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className="placeorder_image" src={productDetails.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder_description">
                        <div className="textgap1"><strong>{productDetails.name}</strong></div>
                        <div>
                            <Rating name="read-only" value="3" readOnly style={{fontsize:"20px"}}/>
                            {productDetails.rating} ratings |
                            {productDetails.review}+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="textgap">Price:<span className="pricetag"> ₹{productDetails.price}</span></div>
                            <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹{productDetails.emi}. No Cost EMI available </div>
                            <div style={{color:"#007600",fontsize:"20px"}}className="textgap">{productDetails.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                        </div>
                        <div>
                            <hr></hr>
                            <div className="textgap2"><strong>About this item</strong></div>
                            <div>
                                <ul>
                                {
                                    productDetails.about!==undefined ?
                                    productDetails.about.map( (item) =>(
                                      <li>{item}</li>
                                  )) :<span></span>
                                    
                                }
                                </ul>
                                {/*<ul>*/}
                                 {/*<li>6.1-inch (15.5 cm diagonal) Super Retina XDR display</li>
                                    <li>Ceramic Shield, tougher than any smartphone glass</li>
                                    <li>A14 Bionic chip, the fastest chip ever in a smartphone</li>
                                    <li>Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording</li>
                                    <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
                                    <li>Industry-leading IP68 water resistance</li>
                                    <li>Supports MagSafe accessories for easy attachment and faster wireless charging</li>
                                    <li>iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more.</li>
                                 </ul>*/}

                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className="placeorder_order">
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div> ₹ 1,999</div>
                            <div style={{marginTop:"10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox"></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox"></input>Apple 20W USB Power Adapter</label>
                            </div>
                            <div><br></br>
                                
                                    <button className="placeorder_button addtocart" onClick={addToCart}>Add to Cart</button>
                
                                <Link to="/checkout">
                                <button className="placeorder_button buy">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default PlaceOrder;