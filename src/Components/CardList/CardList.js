import React from "react";
import "./CardList.css";

const CardList = () => {
    return (
        <div className="card-list">
            <div className="card">
                <div className="img">
                    <img src="/photo/IMG-eac045fe51275fe.jpg" alt="المواد الدراسية" />
                </div>
                <div className="title">
                    <h1>المواد الدراسية</h1>
                    <p>استعراض الدروس والملخصات الخاصة بكل مادة</p>
                </div>
            </div>

            <div className="card">
                <div className="img">
                    <img src="/photo/مصادر.png" alt="مصادر تعليمية" />
                </div>
                <div className="title">
                    <h1>مصادر تعليمية</h1>
                    <p>استكشف كتباً ومصادر تساعدك لتتفوق بدراستك</p>
                </div>
            </div>

            <div className="card">
                <div className="img">
                    <img src="/photo/header.png" alt="نصائح للدراسة" />
                </div>
                <div className="title">
                    <h1>نصائح للدراسة</h1>
                    <p>تعرف على طرق فعالة لتنظيم وقتك وتحسين أدائك الدراسي</p>
                </div>
            </div>

            <div className="card">
                <div className="img">
                    <img src="/photo/pngtree-exams-word-concepts-banner-image_1200562.jpg" alt="نماذج اختبارات" />
                </div>
                <div className="title">
                    <h1>نماذج اختبارات</h1>
                    <p>اطّلع على نماذج اختبارات سابقة لتحضير أفضل</p>
                </div>
            </div>
        </div>
    );
};

export default CardList;













