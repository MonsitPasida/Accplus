import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonImg,
} from "@ionic/react";
import "./Home.css";

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
type Item3 = {
  src: string;
  text: string;
};

type Item4 = {
  src: string;
  text: string;
};

type Item5 = {
  src: string;
  text: string;
};
type Item6 = {
  src: string;
  text: string;
};

type Item7 = {
  src: string;
  text: string;
};

type Item8 = {
  src: string;
  text: string;
};

type Item9 = {
  src: string;
  text: string;
};


const items: Item[] = [
  {
    src: "./images/KBANK.png",
    text: "ธนาคารกสิกรไทย",
  },
];

const items1: Item1[] = [
  {
    src: "./images/GSB.png",
    text: "ธนาคารออมสิน",
  },
];

const items2: Item2[] = [
  {
    src: "./images/BBL.png",
    text: "ธนาคารกรุงเทพ",
  },
];

const items3: Item3[] = [
  {
    src: "./images/KTB.png",
    text: "ธนาคารกรุงไทย",
  },
];
const items4: Item4[] = [
  {
    src: "./images/BAY.png",
    text: "ธนาคารกรุงศรีอยุธยา",
  },
];
const items5: Item5[] = [
  {
    src: "./images/CITI.png",
    text: "ซิตี้แบงก์ประเทศไทย",
  },
];
const items6: Item6[] = [
  {
    src: "./images/c.png",
    text: "ธนาคารซีไอเอ็มบีไทย",
  },
];
const items7: Item7[] = [
  {
    src: "./images/TMB.png",
    text: "ธนาคารทหารไทย",
  },
];
const items8: Item8[] = [
  {
    src: "./images/SCB.png",
    text: "ธนาคารไทยพาณิชย์",
  },
];
const items9: Item9[] = [
  {
    src: "./images/T.png",
    text: "ธนาคารไทยเครดิตเพื่อรายย่อย",
  },
];


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>หน้าหลัก</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {items.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              น.ส.กองแก้ว น้อยเทียม ประทาย
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items1.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              บจก.บอสส์ อินเตอร์โปรดักส์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items2.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นายสถาปน์ ปัญญาพยัคฆ์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items3.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              บจก.เอสจีที เซอร์วิส(ประเทศไทย)
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items4.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นางแก่นจันทร์ บุญเทียม
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items5.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              น.ส.ณิชาพัฒน์ หัสดี
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items6.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นายยุทธพนธ์ จันแรม
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items7.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นายสุรเชษฐ์ อังวราวงศ์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items8.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              น.ส.คัทรียา คำยั่งยืน
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items9.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              น.ส.เจนจิรา ประชากุลนิษฐ์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items5.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นางสมพร รัตนชาติวงศ์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items6.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              หจก.กลันทาพาณิชย์
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items2.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              หจก. อู่มารวยการช่าง
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items1.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
              นายรัตนพล วงษ์ซิ้ม
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items4.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
            น.ส.ชุติมา แซ่เตียว
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items3.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
            นายสุธรรม อินทา
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
        {items7.map((image) => (
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>
            นายพิษณุ ทามโคกสูง
              <p>{image.text}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
