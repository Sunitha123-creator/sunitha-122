import React,{ useEffect, useState} from "react";
import "./RightSide.css";
import Product from "./Product";
import { Link } from 'react-router-dom';


function RightSidePanel(props){
    
     const [listOfProduct,setListOfProducts]=useState([]);

    useEffect(()=>{
        let list=[
            {id: 101,name:"Iphone 10", rating :"4789", price :"23496", image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/apple_12_mini__crwfIEmx.PNG?updatedAt=1639760891249"},
            {id: 102,name:"Iphone 11", rating :"5789", price :"45677", image:"https://ik.imagekit.io/amazon12345/amazon-image/Apple__iphone_11_ZDZN-tmJH7w.PNG?updatedAt=1639762464605"},
            {id: 103,name:"Iphone 12", rating :"2345", price :"34256", image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iphone_12_wMD09rNdfY.PNG?updatedAt=1639760891497"},
            {id: 104,name:"Iphone 13", rating :"1679", price :"160980", image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/black_LF3XWS04Sxr.PNG?updatedAt=1639900923388"},
            {id: 105,name:"onePlus", rating :"1679", price :"160980",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__eY0zeJywGm.webp?updatedAt=1639653714192"},
            {id: 106,name:"onePlus", rating :"3456", price :"16770",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__7xBjnkAAiF.webp?updatedAt=1639653714542"},
            {id: 107,name:"Samsung Galaxy M52 5G", rating :"8907", price :"13670",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/sansung_5g_wJg8kZ0RhAn.PNG?updatedAt=1639893723040"},
            {id: 108,name:"OPPO A55", rating :"1747", price :"14550",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/oppo_a55_psPpt4FlZ.PNG?updatedAt=1639893721944"},
            {id: 109,name:"OPPO F19", rating :"93623", price :"56083",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/oppo_f19_mN8yVMbNhK.PNG?updatedAt=1639893722652"},
            {id: 110,name:"Vivo Y33s (Middday Dream)", rating :"7885", price :"134455",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/vivo_y33s_cty1xmhnO.PNG?updatedAt=1639893723626"},
            {id: 111,name:"Redmi 9 Activ (Carbon Black,4GB RAM)", rating :"8890", price :"164873",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/Redmi_9_XegQQa6Im.PNG?updatedAt=1639893723678"},
            {id: 112,name:"Redmi Note 10 Lite (Glacier White, 4GB RAM)", rating :"15479", price :"16098",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/mi_note_7SbAQ-pFU.PNG?updatedAt=1639893721325"},
            {id: 113,name:"Xiaomi 11 Lite NE 5G (Jazz Blue)", rating :"1345", price :"16769",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/Xiaomi_hVGjnukN39.PNG?updatedAt=1639893723672"},
            {id: 114,name:"OnePlus 9 Pro 5G (Morning Mist, 12GB RAM)", rating :"17676", price :"112345",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/one_plus_9_JgcDVZYvsLc.PNG?updatedAt=1639893721736"},
            {id: 115,name:"OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM)", rating :"16787", price :"156673",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/one_plus_nord_w6eL20-GrX.PNG?updatedAt=1639893723173"},
            {id: 116,name:"iQOO 7 5G (Monster Orange,8GB RAM)", rating :"167957", price :"16000",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/iqoo_QDe2s0MBZ.PNG?updatedAt=1639893722915"},
            {id: 117,name : "Fashion Bag",rating:"45665",price:"500",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/bag_QUooRye5GsD.jpg?updatedAt=1640787045518"},
            {id: 118,name : "Maybelline liquid lipstick",rating:"965",price:"700",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/lipstick2_SjB0Jq_Ys.jpg?updatedAt=1640787050620"},
            {id: 119,name : "Head Set",rating:"8925",price:"1500",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/headset_pmSzw4jKF.jpg?updatedAt=1640787048357"},
            {id: 120,name : "Yasmika Sarees",rating:"225",price:"1000",image:"https://ik.imagekit.io/amazon12345/amazon-image/mobiles/saree3_cbhbAj16C.jpg?updatedAt=1640787053835"},
        ]
        
        setListOfProducts(list);
    },[]);

    return(
        <div className="RightSide_main">
            {/* <Product rating="57647" price="875837" name="iphone" image="https://ik.imagekit.io/amazon12345/amazon-image/mobiles/Apple_iphone_13_pro_Max_1__AW5WL-kKDgL.PNG?updatedAt=1639760891510"/>
            <Product/>
            <Product/>
            <Product/> 
            <Product/> */}

            {
               listOfProduct.map( (item) =>(
                   <Link to={`/order/`+item.id}>
                   <Product definition={item}/>
                   </Link>
               ))
            }
        
        </div>

    );
}
export default RightSidePanel;