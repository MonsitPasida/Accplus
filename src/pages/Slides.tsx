import React from "react";
import {
  IonImg,
  IonContent,
  IonSlides,
  IonSlide,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonApp,
} from "@ionic/react";

import "./Slides.css";
import { arrowRedoCircleOutline } from "ionicons/icons";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

type Item = {
  src: string;
  text: string;
};

type Item1 = {
  src: string;
  text: string;
};

type Item2 = {
  src: string;
  text: string;
};

const items: Item[] = [
  {
    src: "./images/os1.jpg",
    text: "รูป1",
  },
];

const items1: Item1[] = [
  {
    src: "./images/os2.jpg",
    text: "รูป1",
  },
];

const items2: Item2[] = [
  {
    src: "./images/os3.jpg",
    text: "รูป1",
  },
];

const Slides: React.FC = () => (
  <IonPage>
    {/* <body>
     <IonApp> */}

    <IonContent fullscreen class="ion-padding" scroll-y="false">
      <IonSlides>
        <IonSlide>
          <div className="slide">
            <img src="./images/sdtc.jpg" />
            <h2>Welcome</h2>
            <p>
              การพัฒนาแอปพลิเคชันบนอุปกรณ์พกพาเพื่อตรวจสอบรายได้ จากกรณีศึกษา
              บริษัท รีแฮบบิลิเทชั่น แอนด์ ลีกัล คอนซัลแทนท์ จำกัด
            </p>
          </div>
        </IonSlide>

        <IonSlide>
          <img src="./images/sdtc.jpg" />
          <h2>โดย</h2>
          <p>
            <b>มนต์สิทธิ์ ผาสีดา</b>
          </p>
          <p>
            <b>ชาตรี แซ่ซ่ง</b>
          </p>
        </IonSlide>

        <IonSlide>
          <img src="./images/sdtc.jpg" />
          <h2>ประจำปีการศึกษา 2563</h2>
          <p>
            <b>
              วิทยาลัยเทคโนโลยีสยามธุรกิจ ในพระอุปถัมภ์ สมเด็จพระเจ้าภคินีเธอ
              เจ้าฟ้าเพชรรัตนราชสุดา สิริโสภาพัณณวดี
              สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ กรุงเทพมหานคร
            </b>
          </p>
        </IonSlide>

        <IonSlide>
          <img src="./images/sdtc.jpg" />
          <h2>เริ่มต้นใช้งาน</h2>
          <IonButton href="./Login" fill="clear">
            Login <IonIcon slot="end" icon={arrowRedoCircleOutline} />
          </IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>

    {/* </IonApp>
     
     
     </body> */}
  </IonPage>
);

export default Slides;
