import React from "react";
import { NavLink } from 'react-router-dom';

function Swift() {
    return (
        <div style={{paddingTop: '39px', width: '100%', height: '2100%', position: 'absolute', backgroundColor: 'white', zIndex: '10000000'}}>
            <div className="p-8 font-mono">
                <div style={{padding: '5px', clear: 'both'}}></div>
                <div className="p-12">
                    <div style={{padding: '10px', clear: 'both'}}></div>
                    <h1 className="">
                        Account number:
                    </h1>
                    <h1 className="pt-1"><strong>1060127777</strong></h1>
                    <div style={{padding: '10px', clear: 'both'}}></div>
                    <h1 className="">
                        Account name:
                    </h1>
                    <h1 className="pt-1"><strong>HIF CONSULTING COMPANY LIMITED</strong></h1>
                    <div style={{padding: '10px', clear: 'both'}}></div>
                    <h1 className="">
                        SWIFT code:
                    </h1>
                    <h1 className="pt-1"><strong>BFTVVNVX037</strong></h1>
                    <div style={{padding: '10px', clear: 'both'}}></div>
                    <h1 className="">
                        Bank branch address:
                    </h1>
                    <h1 className="pt-1">JOINT STOCK COMMERCIAL BANK FOR FOREIGN TRADE OF VIETNAM</h1>
                    <h1 className="pt-1">72 PHAM NGOC THACH STR, DISTRICT 3, HO CHI MINH CITY, VIET NAM</h1>
                    <div style={{padding: '12px', clear: 'both'}}></div>
                    <NavLink to='/' className='font-sans p-2 bg-green-500 hover:bg-green-700 text-white'>RETURN TO HIF.COM.VN</NavLink>
                    <div style={{padding: '50px', clear: 'both'}}></div>
                </div>
            </div>
        </div>
    )
}

export default Swift