import React from "react";
import "./Main.css";

const main =()=>{
    return(
        <main className="main_container">
            <p className="p1">لن تنجح </p>
            <p className="p2">إلا إذا تقبلت ألم الانضباط</p>
            <section className="specializations_container">
                <a href="/public/photo/copyImage.png" className="entrepreneurship_and_business"><h2>ريادة اعمال</h2></a>
                <a href="/public/photo/industrial.jpg" className="industrial"><h2>صناعي</h2></a>
                <a href="/public/photo/Literary.jpg" className="literary"><h2>ادبي</h2></a>
                <a href="/public/photo/scientific.jpg" className="scientific"><h2>علمي</h2></a>
                
            </section>
        </main>
        
    );
}
export default main;